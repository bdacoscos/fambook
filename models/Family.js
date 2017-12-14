var mongoose = require('mongoose');
var user = require('./User');
var Schema = mongoose.Schema;
var postSchema = require('./Post');

var familySchema = new mongoose.Schema({
  name: String,
  familyCode: String,
  users: [{type: Schema.Types.ObjectId, ref: 'User'}],
  posts: [postSchema]
});

module.exports = mongoose.model('Family', familySchema);