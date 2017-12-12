var Family = require('./../models/Family');


function index(req, res) {
  console.log('familiesCtrl.index being hit');
  // here let's index all family's posts
  User.find({}, function (err, users) {
    console.log(users)
    res.json(users).status(200);
  });
}

module.exports = {
  index
}