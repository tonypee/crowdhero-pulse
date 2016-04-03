import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Link to="/add">Add</Link>
        {this.props.children}
      </div>
    );
  }
}

export default Navigation;
