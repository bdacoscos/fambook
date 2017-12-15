var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new mongoose.Schema({
  content: String,
  tags: [String],
  user: {type: Schema.Types.ObjectId, ref: 'User'},
}, {
    timestamps: true
  }
);

module.exports = mongoose.model('Post', postSchema);