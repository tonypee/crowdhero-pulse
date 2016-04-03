import React from 'react';
import ReactDOM from 'react-dom';
import tree from '../state';
import { Router, Route, Link } from 'react-router'
import baobabReact from 'baobab-react';
var root = baobabReact.decorators.root;
var branch = baobabReact.decorators.branch;

@root(tree)
@branch({
  cursors: {
    items: ['items']
  }
})
class Opportunities extends React.Component {
  constructor () {
    super()
    this.db = new Firebase('https://glowing-fire-7199.firebaseio.com/items/');
    this.db.limitToLast(25)
      .on("child_added", child => {
        tree.select('items').push(child.val());
      });
  }

  render() {
    return (
      <ul>
        {this.props.items.map((val,i) => {
          return <li key={i}>{val}</li>
        })}
      </ul>
    )
  }
}

export default Opportunities;
