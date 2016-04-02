var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});


app.post('/db', function (request, response) {
  response.send('this is a post');
  // db.createCollection('test', function(err, collection) {
  //   var doc1 = {'hello':'doc1'};
  //   var doc2 = {'hello':'doc2'};
  //   var lotsOfDocs = [{'hello':'doc3'}, {'hello':'doc4'}];
  //
  //   collection.insert(doc1);
  //
  //   collection.insert(doc2, {w:1}, function(err, result) {});
  //
  //   //collection.insert(lotsOfDocs, {w:1}, function(err, result) {});
  // });
});

app.get('/db', function (request, response) {
  //

  var conn = "mongodb://ch1:chpass@ds023398.mlab.com:23398/croudhero-pulse";

  MongoClient.connect(conn, function(err, db) {
    if(!err) {
      console.log("We are connected");

      var cursor = db.collection('test').find( );
      cursor.toArray()
        .then(function(result) {
          response.render('pages/db', {result: result});
        });
    }
  });
});

app.get('/test', function(request, response) {
  response.send('test 123');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
