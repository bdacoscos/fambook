var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  post: [postSchema]
});

var postSchema = new mongoose.Schema({
  content: String,
  tags: [String],
  images: [String],
  comments: [String]
});

var User = mongoose.model('User', userSchema);

module.exports = User;