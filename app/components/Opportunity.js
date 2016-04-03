import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router'
import baobabReact from 'baobab-react';
import tree from '../state';

var root = baobabReact.decorators.root;
var branch = baobabReact.decorators.branch;

@root(tree)
@branch({
  cursors: {
    items: ['items']
  }
})
class Opportunity extends React.Component {
  constructor () {
    super()
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>Opportunity {this.props.params.id}</h1>
      </div>
    )
  }
}

export default Opportunity;
