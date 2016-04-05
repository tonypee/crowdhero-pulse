import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router'
import baobabReact from 'baobab-react';
import tree from '../state';
import config from '../config';
import DataActions from '../actions/DataActions';
var root = baobabReact.decorators.root;
var branch = baobabReact.decorators.branch;

@branch({
  cursors: {
    selected: ['selected']
  }
})
class Opportunity extends React.Component {

  componentWillMount() {
    DataActions.selectOpportunity(this.props.params.id);
  }

  render() {
    var {selected} = this.props;

    if (!selected) return <div />;

    return (
      <div className="page opportunity">
        <h3>Opportunity</h3>
        {selected.image && <img src={selected.image} />}
        {selected.name} - {selected.company}
      </div>
    );
  }
}

export default Opportunity;
