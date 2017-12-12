var User = require('../models/User');

function index(req, res) {
  console.log(`userCtrl.index being hit`);
  User.find({}, function(err, users) {
    console.log(users)
    res.json(users).status(200);
    console.log(`oh hello`);
  });
}

module.exports = {
  index
}