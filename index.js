var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//app.get('', function(request, response) {
app.all('/*', function(request, response) {
  var baseURL = request.get('host') == 'localhost:5000' ? 'http://localhost:5000' : 'https://crowdhero-pulse.herokuapp.com';
  response.render('pages/index', {baseURL: baseURL});
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
