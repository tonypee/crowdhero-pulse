import tree from '../state';
import config from '../config';

class DataActions {

  constructor() {
    this.cur = tree.select('selected');
  }

  addOpportunity(data) {
    var db = new Firebase(config.firebaseURL + '/items/');
    db.push(data);
  }

  updateOpportunity(key, data) {
    var db = new Firebase(config.firebaseURL + '/items/' + key);
    db.update(data);
  }

  selectOpportunity(key) {
    this.resetSelected();

    var db = new Firebase(config.firebaseURL + '/items/' + key);
    db.once('value', child => {
      tree.select('selected').set({
        key:child.key(),
        val:child.val()
      });
    });
  }

  modifySelectedField(key, val) {
    tree.select('selected').set(['val', key], val);
  }

  resetSelected() {
    this.cur.set({
      key:null,
      val:{}
    });
  }
}

export default new DataActions();
