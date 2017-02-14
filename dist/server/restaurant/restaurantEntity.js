var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var schema = new mongoose.Schema({
  resId : Number,
  resName : String,
  location : String,
  locality : String,
  cusines : String,
  ratings : String,
  Images : String,
  comments : String,
});

var restaurant = mongoose.model('restaurant',schema);

module.exports = restaurant;