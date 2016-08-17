var Places = require('./models.js');

module.exports = {

  renderPlaces: function (req, res) {

    Places.find({}, function(err, data) {
      if(err) return console.error('Error finding all places:', err);

      else {
        res.json(data);
      }
      
    });

  }
}