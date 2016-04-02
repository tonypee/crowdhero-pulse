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


// app.get('/db', function (request, response) {
//   if (request.query.submit != undefined) {
//     response.send('done');
//     return;
//   }
//   var url ="postgres://tgbdruuzgmrrxf:162TbmVitw3nDCxfX43DFUxzrx@ec2-23-21-157-223.compute-1.amazonaws.com:5432/d3qkq2csud3s16";
//   pg.defaults.ssl = true;
//   pg.connect(url, function(err, client, done) {
//     if (err) throw err;
//
//     client.query('SELECT * FROM test_table', function(err, result) {
//       done();
//       if (err)
//        { console.error(err); response.send("Error " + err); }
//       else
//        { response.render('pages/db', {results: result.rows, query:request.query} ); }
//     });
//   });
// })

app.get('/test', function(request, response) {
  response.send('test 123');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
