import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Link to="/edit">Add</Link>
        {this.props.children}
      </div>
    )
  }
}

export default Navigation;
