import React from 'react';
import ReactDOM from 'react-dom';
import tree from '../state';
import { Router, Route, Link, browserHistory } from 'react-router'
import baobabReact from 'baobab-react';
import config from '../config';
import _ from 'lodash';
import ItemActions from '../actions/ItemActions';
var branch = baobabReact.decorators.branch;

@branch({
  cursors: {
    selected: ['selected']
  }
})
class OpportunityAddEdit extends React.Component {

  componentWillMount() {
    this.isAdding = this.props.params.id === undefined;

    if (!this.isAdding) {
      ItemActions.selectOpportunity(this.props.params.id);
    } else {
      ItemActions.resetSelected();
    }
  }

  componentWillUnmount() {
    // remove db
  }

  onSubmit() {
    var data = this.props.selected;
    if (this.isAdding) {
      ItemActions.addOpportunity(data);
    } else {
      ItemActions.updateOpportunity(this.props.params.id, data);
    }

    browserHistory.push('/')
  }

  onChange(type, e) {
    ItemActions.modifySelectedField(type, e.target.value)
  }

  handleFile(type, e) {
    var self = this;
    var reader = new FileReader();
    var file = e.target.files[0];

    reader.onload = (upload) => {
      ItemActions.modifySelectedField('image', upload.target.result)
    }
    reader.readAsDataURL(file);
  }

  render() {
    var {selected} = this.props;

    if (!this.isAdding && !selected) return <div />;

    return (
      <div className="page opportunityAddEdit">
        {this.isAdding ? <h3>Add</h3> : <h3>Update</h3>}
        <ul>
          {this.renderItem('input', 'name')}
          {this.renderItem('input', 'company')}
          {this.renderItem('input', 'date')}
          {this.renderItem('textarea', 'description')}
          {this.renderItem('image', 'image')}
        </ul>
        <br />
        <button onClick={this.onSubmit.bind(this)}>submit</button>
      </div>
    );
  }

  renderItem(type, name) {
    return (
      <li>
        <label for="name">{name}</label>
        {this.renderInput(type,name)}
      </li>
    );
  }

  renderInput(type, name) {
    var {selected} = this.props;
    switch(type) {
      case 'input':
        return (<input id="name" ref="name"
                  onChange={this.onChange.bind(this, name)}
                  value={selected[name] || ''}/>)
      case 'textarea':
        return (<textarea ref="description"
                  onChange={this.onChange.bind(this, name)}
                  value={selected[name] || ''}></textarea>);
      case 'image':
        return (<div>
          <img src={selected[name] || ''} />
          <input type="file" onChange={this.handleFile.bind(this, name)} />
        </div>);
    }
  }
}

export default OpportunityAddEdit;
