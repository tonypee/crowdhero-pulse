import React from 'react';
import ReactDOM from 'react-dom';
import tree from '../state';
import { Router, Route, Link, browserHistory } from 'react-router'
import baobabReact from 'baobab-react';
import config from '../config';
import _ from 'lodash';
import DataActions from '../actions/DataActions';
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
      DataActions.selectOpportunity(this.props.params.id);
    } else {
      DataActions.resetSelected();
    }
  }

  componentWillUnmount() {
    // remove db
  }

  onSubmit() {
    var data = this.props.selected.val;
    if (this.isAdding) {
      DataActions.addOpportunity(data);
    } else {
      DataActions.updateOpportunity(this.props.params.id, data);
    }

    browserHistory.push('/')
  }

  onChange(type, e) {
    DataActions.modifySelectedField(type, e.target.value)
  }

  handleFile(type, e) {
    var self = this;
    var reader = new FileReader();
    var file = e.target.files[0];

    reader.onload = (upload) => {
      DataActions.modifySelectedField('image', upload.target.result)
    }
    reader.readAsDataURL(file);
  }

  render() {
    if (this.props.params.id && !this.props.selected.key) {
      return <div />;
    }
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
    var imageStyle = {
      maxWidth: 100,
      maxHeight: 100
    }
    switch(type) {
      case 'input':
        return (<input id="name" ref="name"
                  onChange={this.onChange.bind(this, name)}
                  value={this.props.selected.val[name] || ''}/>)
      case 'textarea':
        return (<textarea ref="description"
                  onChange={this.onChange.bind(this, name)}
                  value={this.props.selected.val[name] || ''}></textarea>);
      case 'image':
        return (<div>
          <img style={imageStyle} src={this.props.selected.val[name] || ''} />
          <input type="file" onChange={this.handleFile.bind(this, name)} />
        </div>);
    }
  }
}

export default OpportunityAddEdit;
