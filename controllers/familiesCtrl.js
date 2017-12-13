var Family = require('./../models/Family');


function index(req, res) {
  console.log('familiesCtrl.index being hit');
  // here let's index all family's posts
  Family.find({users: req.user._id}, function (err, families) {
    console.log(families)
    res.status(200).json(families);
  });
}

function joinFamily(req, res) {
  console.log(`I'm trying to join a family!`);
  res.status(200);
}

module.exports = {
  index,
  joinFamily
}