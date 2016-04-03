import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-static-top navbar-inverse">
          <ul>
            <li><Link className="btn btn-default btn-sm" to="/add">Add</Link></li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default Navigation;
