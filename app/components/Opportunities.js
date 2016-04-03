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
    opportunities: ['opportunities']
  }
})
class Opportunities extends React.Component {
  constructor () {
    super()
  }

  componentDidMount() {
    var db = new Firebase(config.firebaseURL + '/items/');
    db.on("child_added", child => {
        tree.select('opportunities').set(child.key(), child.val());
      });
  }

  render() {

    return (
      <div>
        <ul>
          {_.map(this.props.opportunities, (val,i) => {
            return (
              <li key={i}>
                {val.name} - {val.company}
                <Link to={'/edit/' + i}>edit</Link>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Opportunities;
