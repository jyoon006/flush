var helpers = require('./helpers.js');
var app = require('./server.js');

app.get('/api/places', helpers.renderPlaces);
app.get('/api/addplaces', helpers.addPlaces);

