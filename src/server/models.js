var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlacesSchema = new Schema({
  place_name: String,
  location: {
    address: String,
    latitude: Number,
    longitude: Number
  }, 
  description: {
    code: String,

  }
});

module.exports = mongoose.model('Places', PlacesSchema);
