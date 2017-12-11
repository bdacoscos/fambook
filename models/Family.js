var mongoose = require('mongoose');
var user = require('./User');

var familySchema = new mongoose.Schema({
  users: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});