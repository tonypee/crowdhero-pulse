import React from 'react';
import ReactDOM from 'react-dom';
import tree from '../state';

import baobabReact from 'baobab-react';

var root = baobabReact.decorators.root;
var branch = baobabReact.decorators.branch;
//var branch = require('baobab-react/decorators').branch;

@root(tree)
@branch({
  cursors: {
    items: ['items']
  }
})
class Main extends React.Component {
  constructor () {
    super()
    this.db = new Firebase('https://glowing-fire-7199.firebaseio.com/items/');
    this.db.limitToLast(25)
      .on("child_added", child => {
        tree.select('items').push(child.val());
      });
  }
  componentDidMount() {}

  onAdd() {
    var value = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    this.db.push(value);
  }

  render() {
    return (
      <div>
        <div>Hello World</div>
        {this.renderItems()}
        <input ref="textInput" />
        <button onClick={this.onAdd.bind(this)}>submit</button>
      </div>
    )
  }

  renderItems() {
    return (
      <ul>
        {this.props.items.map((val,i) => {
          return <li key={i}>{val}</li>
        })}
      </ul>
    );
  }
}

export default Main;
