var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});

var SERVER_PORT = 8000;

var userText = 'No text has been sent, this is the default value';
var userFile;

app.use(bodyParser.urlencoded());

//
app.get('/', function(req, res) {
  res.status(200).sendFile(path.join(__dirname + '/index.html'));
});

//
app.post('/post-text', function(req, res) {
  res.status(200).sendFile(path.join(__dirname + '/success.html'));
  console.log('received these parameters: ', req.body);
  console.log(req.body.usertext + ' is also now saved in the backend as the "userText" var');
  userText = req.body.usertext;
});

app.get('/user-text', function(req, res) {
  res.status(200).send(userText);
});

//
app.post('/post-file', upload.single('userfile'), function(req, res) {
  console.log('ping', req.file);
  res.status(200).sendFile(path.join(__dirname + '/success.html'));
});

app.get('/user-file', function(req,res) {
  if(userfile) {
    res.status(200).sendFile(path.join(__dirname + userFile));
  } else {
    res.status(418);
  }

});


//
app.listen(SERVER_PORT, function() {
  console.log('server started on port ', SERVER_PORT);
});
