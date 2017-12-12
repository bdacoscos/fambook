var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
  content: String,
  tags: [String],
  images: [String],
  comments: [String]
}, {
  timestamps: true
});

var userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  posts: [postSchema]
});

var User = mongoose.model('User', userSchema);

module.exports = User;