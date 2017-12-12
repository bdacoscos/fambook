var mongoose = require('mongoose');
require('./database');
var sampleData = require('./sampleData');
var User = require('../models/User');

User.remove({}).then(() => {
  return User.create(sampleData)
})
  .then((user) => {
    console.log(user);
    mongoose.connection.close();
    process.exit();
  })