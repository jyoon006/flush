var express = require('express');
var parser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

var uri = 'mongodb://localhost/flush';
mongoose.connect(uri);

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.get('/', function(req, res) {
  res.json('server deployed and is running');
});

var PORT = process.env.PORT || 8000;

app.listen(PORT, function() {
  console.log('Server listening on port ' + PORT);
});

module.exports = app;

var routes = require('./routes.js');