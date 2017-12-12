var mongoose = require('mongoose');
var commentSchema = require('./Comment');
var Schema = mongoose.Schema;

var postSchema = new mongoose.Schema({
  content: String,
  tags: [String],
  images: [String],
  user: [{type: Schema.Types.ObjectId, ref: 'User'}],
  comments: [commentSchema]
}, {
    timestamps: true
  }
);

module.exports = postSchema;