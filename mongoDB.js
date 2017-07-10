var mongoose = require('mongoose');
// Local host
mongoose.connect('mongodb://localhost/webscraper');

// Mongo Lab 
// mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds153752.mlab.com:53752/web1234')

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  url: String,
  websiteName: String
});

var Item = mongoose.model('Url', itemSchema);

module.exports = Item;