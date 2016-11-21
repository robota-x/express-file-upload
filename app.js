var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var SERVER_PORT = 8000;

var userText = 'No text has been sent, this is the default value';

app.use(bodyParser.urlencoded());


app.get('/', function(req, res) {
  res.status(200).sendFile(path.join(__dirname + '/index.html'));
});

app.post('/post-text', function(req, res) {
  res.status(200).sendFile(path.join(__dirname + '/success.html'));
  console.log('received this parameters: ', req.body);
  console.log('the first letter of the text var is: ', req.body.text[0]);

  console.log(req.body.text + ' is also now saved in the backend as the "userText" var');
  userText = req.body.text;
});

app.get('/user-text', function(req, res) {
  res.status(200).send(userText);
});


app.listen(SERVER_PORT, function() {
  console.log('server started on port ', SERVER_PORT);
});
