import React from 'react';
import ReactDOM from 'react-dom';
import tree from '../state';
import Opportunity from './Opportunity';
import OpportunityAddEdit from './OpportunityAddEdit';
import Opportunities from './Opportunities';
import { Router, Route, Link, browserHistory } from 'react-router'

import baobabReact from 'baobab-react';
var root = baobabReact.decorators.root;
var branch = baobabReact.decorators.branch;

@root(tree)
class Main extends React.Component {
  constructor () {
    super()
  }
  componentDidMount() {}

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Opportunities} />
        <Route path="/m" component={OpportunityAddEdit} />
        <Route path="/v" component={Opportunity} />
      </Router>
    )
  }
}

export default Main;
