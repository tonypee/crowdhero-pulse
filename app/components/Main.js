import React from 'react';
import tree from '../state';
import Opportunity from './Opportunity';
import OpportunityAddEdit from './OpportunityAddEdit';
import Opportunities from './Opportunities';
import Navigation from './Navigation';
import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router'
import baobabReact from 'baobab-react';
var root = baobabReact.decorators.root;
var branch = baobabReact.decorators.branch;

@root(tree)
class Main extends React.Component {
  constructor () {
    super()
  }

  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={Navigation}>
            <IndexRoute component={Opportunities} />
            <Route path="/add" component={OpportunityAddEdit} />
            <Route path="/edit/:id" component={OpportunityAddEdit} />
            <Route path="/view/:id" component={Opportunity} />
          </Route>
        </Router>
      </div>
    );
  }
}

export default Main;
