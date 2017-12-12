var mongoose = require('mongoose');
var user = require('./User');
var Schema = mongoose.Schema;

var familySchema = new mongoose.Schema({
  users: [{type: Schema.Types.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('Family', familySchema);