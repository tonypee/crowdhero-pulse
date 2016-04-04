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
    if (!this.props.selected.key) {
      return <div />;
    }
    var imageStyle = {
      maxWidth: 100,
      maxHeight: 100
    }
    var val = this.props.selected.val;
    return (
      <div className="page opportunity">
        <h3>Opportunity</h3>
        {val.image && <img style={imageStyle} src={val.image} />}
        {val.name} - {val.company}
      </div>
    );
  }
}

export default Opportunity;
