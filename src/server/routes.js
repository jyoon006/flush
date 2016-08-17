var helpers = require('./helpers.js');
var app = require('./server.js');

app.get('/places', helpers.renderPlaces);

