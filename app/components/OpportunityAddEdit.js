import React from 'react';
import ReactDOM from 'react-dom';
import tree from '../state';
import { Router, Route, Link, browserHistory } from 'react-router'
import baobabReact from 'baobab-react';
import config from '../config';
import _ from 'lodash';
import DataActions from '../actions/DataActions';
var root = baobabReact.decorators.root;
var branch = baobabReact.decorators.branch;

@root(tree)
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

  handleFile(e) {
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
    var imageStyle = {
      maxWidth: 100,
      maxHeight: 100
    }

    return (
      <div className="page opportunityAddEdit">
        {this.isAdding && <h3>Add</h3>}
        {!this.isAdding && <h3>Update</h3>}
        <ul>
          <li>
            <label for="name">Name</label>
            <input id="name" ref="name"
                   onChange={this.onChange.bind(this, 'name')}
                   value={this.props.selected.val.name || ''}/>
          </li>
          <li>
            <label for="company">Company</label>
            <input id="company" ref="company"
                   onChange={this.onChange.bind(this, 'company')}
                   value={this.props.selected.val.company || ''} />
          </li>
          <li>
            <label for="name">Date</label>
            <input id="date" ref="date"
                   onChange={this.onChange.bind(this, 'date')}
                   value={this.props.selected.val.date || ''}/>
          </li>
          <li>
            <label for="name">Description</label>
            <textarea ref="description"
                      onChange={this.onChange.bind(this, 'description')}
                      value={this.props.selected.val.description || ''}></textarea>
          </li>
          <li>
            <label for="image">Image</label>
            <img style={imageStyle} src={this.props.selected.val.image || ''} />
            <input type="file" onChange={this.handleFile.bind(this)} />
          </li>
        </ul>
        <br />
        <button onClick={this.onSubmit.bind(this)}>submit</button>
      </div>
    );
  }
}

export default OpportunityAddEdit;
