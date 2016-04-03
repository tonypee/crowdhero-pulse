import React from 'react';
import ReactDOM from 'react-dom';
import tree from '../state';
import { Router, Route, Link } from 'react-router'
import baobabReact from 'baobab-react';
import config from '../config';
var root = baobabReact.decorators.root;
var branch = baobabReact.decorators.branch;

@root(tree)
@branch({
  cursors: {
    items: ['items']
  }
})
class OpportunityAddEdit extends React.Component {
  constructor () {
    super();
    this.db = new Firebase(config.firebaseURL + '/items/');
    this.db.limitToLast(25)
      .on("child_added", child => {
        tree.select('items').push(child.val());
      });
  }

  onAdd() {
    var value = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    this.db.push(value);
  }

  render() {
    return (
      <div>
        <div>Hello World</div>
        <ul>
        </ul>
        <input ref="textInput" />
        <button onClick={this.onAdd.bind(this)}>submit</button>
      </div>
    );
  }
}

export default OpportunityAddEdit;
