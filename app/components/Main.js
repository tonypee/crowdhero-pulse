import React from 'react';

class Main extends React.Component {
  constructor () {
    super()
    var myFirebaseRef = new Firebase('https://glowing-fire-7199.firebaseio.com/items/');
  //  myFirebaseRef.push('hello');

    myFirebaseRef.orderByKey().on("child_added", function(snapshot) {
      console.log(snapshot.key(), snapshot.val());
    });

    //console.log(Firebase);
  }
  render() {
    return (
      <div>Hello World</div>
    )
  }
}

export default Main;
