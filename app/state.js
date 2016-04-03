import Baobab from 'baobab';

var tree = new Baobab({
  opportunities: {},
  editing: {
    key: null,
    val: {}
  }
});

window.tree = tree;

export default tree;
