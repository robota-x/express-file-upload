// note: the order is a bit wonky, usually you put imports first. Grouped up as logic groups to show what belongs where

var path = require('path');


// express setup
var express = require('express');
var app = express();

var SERVER_PORT = 8000;


// middleware: bodyParser to parse the text-only form, multer to process the file upload.
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

var multer = require('multer');
var upload = multer({dest: 'uploads/'}); // specify where to save the uploaded files. they can also be kept in memory only.


// variables to persist the last uploaded text and (path to) file
var userText = 'No text has been sent, this is the default value';
var userFile;


// landing page, show the index.html which has the upload forms.
app.get('/', function(req, res) {
  res.status(200).sendFile(path.join(__dirname + '/index.html')); // send a status of 200 (success) and the html file
});


// text posting and retrieving.
app.post('/post-text', function(req, res) {
  userText = req.body.usertext;
  res.status(200).sendFile(path.join(__dirname + '/success.html'));
});

app.get('/user-text', function(req, res) {
  res.status(200).send(userText);
});


// file posting and retrieving. Multer gives us various info in the req.file object, including the path to the saved file, so we save that (not the file)
app.post('/post-file', upload.single('userfile'), function(req, res) {
  userFile = req.file.path;
  res.status(200).sendFile(path.join(__dirname + '/success.html'));
});

app.get('/user-file', function(req,res) {
  if(userFile) {
    res.status(200).sendFile(path.join(__dirname + '/' + userFile)); // send a status of 200 (success) and the last uploaded file
  } else {
    res.sendStatus(404);  // if we haven't uploaded anything, send a 404 (resource not found) status and no custom message.
  }
});


// start the server on the given port and print to console.
app.listen(SERVER_PORT, function() {
  console.log('server started on port ', SERVER_PORT);
});
