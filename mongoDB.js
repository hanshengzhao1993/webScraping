var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/webscraper');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  url: String
});

var Item = mongoose.model('Url', itemSchema);

module.exports = Item;