var express = require('express');
var app = express();
var pg = require('pg');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});


app.get('/db', function (request, response) {
  //
})

app.get('/test', function(request, response) {
  response.send('test 123');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
