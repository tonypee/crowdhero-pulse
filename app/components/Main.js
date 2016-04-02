import React from 'react';

class Main extends React.Component {
  constructor () {
    super()
    var myFirebaseRef = new Firebase('https://glowing-fire-7199.firebaseio.com/events/');
    // myFirebaseRef.push('hello');

    // myFirebaseRef.orderByKey().on("child_added", function(snapshot) {
    //   console.log(snapshot.key(), snapshot.val());
    // });
    //console.log(Firebase);

    this.state = {
      data: []
    }
  }
  onChange(type, e) {
    this.value = e.target.value;
  }

  onClick() {
    this.state.data.push(this.value);
    this.setState();
  }
  render() {
    return (
      <div>
        <div>Hello World</div>
        {this.state.val}
        <ul>
          {this.state.data.map(val => {
            return <li>{val}</li>
          })}
        </ul>
        <input onChange={this.onChange.bind(this, 'value')}></input>
        <button onClick={this.onClick.bind(this)}>submit</button>
      </div>
    )
  }
}

export default Main;
