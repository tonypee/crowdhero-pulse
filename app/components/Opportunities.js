import React from 'react';
import ReactDOM from 'react-dom';
import tree from '../state';
import { Router, Route, Link } from 'react-router'
import baobabReact from 'baobab-react';
import config from '../config';
var root = baobabReact.decorators.root;
var branch = baobabReact.decorators.branch;

@branch({
  cursors: {
    opportunities: ['opportunities']
  }
})
class Opportunities extends React.Component {

  componentDidMount() {
    var db = new Firebase(config.firebaseURL + '/items/');
    db.on("child_added", child => {
      tree.select('opportunities').push({
        key: child.key(),
        ...child.val()
      });
    });
  }

  render() {
    return (
      <div className="page opportunities">
        <ul>
          {this.props.opportunities.map(val => {
            return (
              <li key={val.key}>
                {val.image && <img src={val.image} />}
                <Link to={`/view/${val.key}`}>{val.name} - {val.company}</Link> &nbsp;
                <Link to={`/edit/${val.key}`}>edit</Link>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Opportunities;
