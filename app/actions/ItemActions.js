import tree from '../state';
import config from '../config';

class ItemActions {

  addOpportunity(data) {
    var db = new Firebase(config.firebaseURL + '/items/');
    db.push(data);
  }
  
  selectOpportunity(key) {
    this.resetSelected();

    var db = new Firebase(config.firebaseURL + '/items/' + key);
    db.once('value', child => {
      tree.select('selected').set({
        key:child.key(),
        ...child.val()
      });
    });
  }

  updateOpportunity(key, data) {
    var db = new Firebase(config.firebaseURL + '/items/' + key);
    db.update(data);
  }

  modifySelectedField(key, val) {
    tree.select('selected', key).set(val);
  }

  resetSelected() {
    tree.select('selected').set({});
  }
}

export default new ItemActions();
