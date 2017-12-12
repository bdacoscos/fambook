var User = require('../models/User');

function index(req, res) {
  console.log(`hello my name is dr green thumb`);
  User.find({}, function(err, users) {
    console.log(users)
    res.json(users).status(200);
  });
}

module.exports = {
  index
}