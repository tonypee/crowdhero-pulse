import React from 'react';
import ReactDOM from 'react-dom';
import tree from '../state';
import { Router, Route, Link, browserHistory } from 'react-router'
import baobabReact from 'baobab-react';
import config from '../config';
import _ from 'lodash';
var root = baobabReact.decorators.root;
var branch = baobabReact.decorators.branch;

@root(tree)
@branch({
  cursors: {
    editing: ['editing']
  }
})
class OpportunityAddEdit extends React.Component {

  componentDidMount() {
    this.dataCursor = tree.select('editing');
    this.isAdding = this.props.params.id === undefined;

    console.log('id', this.props.params.id);

    this.db = new Firebase(config.firebaseURL + '/items/' + (this.props.params.id || ''));
    this.db.once('value', child => {
      if (!this.isAdding) {
        tree.select('editing').set({
          key:child.key(),
          val:child.val()
        });
      }
    });

    if (this.isAdding) { // reset values
      this.dataCursor.set(['id'], null);
      this.dataCursor.set(['val'], {});
    }
  }

  componentWillUnmount() {
    // remove db
  }

  onSubmit() {
    var data = this.props.editing.val;
    if (!this.props.params.id) {
      this.db.push(data);
    } else {
      this.db.update(data);
    }

    browserHistory.push('/')
  }

  onChange(type, e) {
    this.dataCursor.set(['val', type], e.target.value);
  }

  handleFile(e) {
    var self = this;
    var reader = new FileReader();
    var file = e.target.files[0];

    reader.onload = (upload) => {
      this.dataCursor.set(['val', 'image'], upload.target.result);
    }
    reader.readAsDataURL(file);
  }

  render() {
    if (this.props.params.id && !this.props.editing.key) {
      return <div />;
    }
    var imageStyle = {
      maxWidth: 100,
      maxHeight: 100
    }

    return (
      <div>
        <ul>
          <li>
            <label for="name">Name</label>
            <input id="name" ref="name"
                   onChange={this.onChange.bind(this, 'name')}
                   value={this.props.editing.val.name || ''}/>
          </li>
          <li>
            <label for="company">Company</label>
            <input id="company" ref="company"
                   onChange={this.onChange.bind(this, 'company')}
                   value={this.props.editing.val.company || ''} />
          </li>
          <li>
            <label for="name">Date</label>
            <input id="date" ref="date"
                   onChange={this.onChange.bind(this, 'date')}
                   value={this.props.editing.val.date || ''}/>
          </li>
          <li>
            <label for="name">Description</label>
            <textarea ref="description"
                      onChange={this.onChange.bind(this, 'description')}
                      value={this.props.editing.val.description || ''}></textarea>
          </li>
          <li>
            <label for="image">Image</label>
            <img style={imageStyle} src={this.props.editing.val.image || ''} />
            <input type="file" onChange={this.handleFile.bind(this)} />
          </li>
        </ul>

        <button onClick={this.onSubmit.bind(this)}>submit</button>
      </div>
    );
  }
}

export default OpportunityAddEdit;
