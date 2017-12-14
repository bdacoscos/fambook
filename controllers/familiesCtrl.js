var Family = require('./../models/Family');
var User = require('./../models/User');


function index(req, res) {
  Family.find({}).then(fam => {
    res.json(fam);
  })

}

function joinFamily(req, res) {
  Family.findOne({ familyCode: req.body.familyCode }).then((fam => {
    fam.users.push(req.body._id);
    fam.save();
    res.json(fam);
  }));
}

function createFamily(req, res) {
  var family = new Family(req.body);
  family.familyCode = family._id

  family.save().then(fam => {
    res.json(fam);
  }).catch(err => res.json(400).json(err));
}

module.exports = {
  index,
  joinFamily,
  createFamily
}