var Places = require('./models.js');

module.exports = {

  renderPlaces: function (req, res) {

    Places.find({}, function(err, places) {
      if(err) return console.error('Error finding all places:', err);

      else {
        res.json(places);
      }

    });

  },

  addPlaces: function(req, res) {

    Places.findOne({}, function(err, place) {
      if(err) return console.error('Error adding new place', err);
      
      if(!place) {
        Places.create({
          place_name: req.body.place_name,
          location: {
            address: req.body.location.address,
            latitude: req.body.location.latitude,
            longitude: req.body.location.longitude
          }, 
          description: {
            code: req.body.description.code,
          }
        }, function(err, place) {
          if(err) return console.error(err);
          return res.json(place);
        });
      }
      
    })
  }


}