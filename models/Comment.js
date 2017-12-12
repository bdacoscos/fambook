var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
  content: [String]
}, {
    timestamps: true
  }
);

module.exports = commentSchema;