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
        tree.select('opportunities').set(child.key(), child.val());
      });
  }

  render() {
    var imageStyle = {
      maxWidth: 50,
      maxHeight: 50
    }

    return (
      <div className="page opportunities">
        <ul>
          {_.map(this.props.opportunities, (val,i) => {
            return (
              <li key={i}>
                {val.image && <img style={imageStyle} src={val.image} />}
                <Link to={`/view/${i}`}>{val.name} - {val.company}</Link> &nbsp;
                <Link to={`/edit/${i}`}>edit</Link>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Opportunities;
