import Baobab from 'baobab';

var tree = new Baobab({
  opportunities: {},
  selected: {
    key: null,
    val: {}
  }
});

window.tree = tree;

export default tree;
