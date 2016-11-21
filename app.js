var path = require('path');
var express = require('express');
var app = express();

var SERVER_PORT = 8000;


app.get('/', function(req, res) {
  res.status(200).sendFile(path.join(__dirname + '/index.html'));
});

app.post('/postdata', function(req, res) {
  res.status(200).send('received data');
});

app.listen(SERVER_PORT, function() {
  console.log('server started on port ', SERVER_PORT);
});
