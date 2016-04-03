import Firebase from 'firebase';
import tree from '../state';
import config from '../config';

var db = new Firebase(config.firebaseURL + '/items/');
db.on("child_added", child => {
    tree.select('opportunities').set(child.key(), child.val());
  });
