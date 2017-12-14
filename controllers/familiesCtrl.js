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
  // check if inputted family id exists, if so join fam
}

function createFamily(req, res) {
  var family = new Family(req.body);
  family.save().then(fam => {
    res.json({fam});
  }).catch(err => res.json(400).json(err));
}

module.exports = {
  index,
  joinFamily,
  createFamily
}