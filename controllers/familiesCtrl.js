var Family = require('./../models/Family');


function index(req, res) {
  console.log('familiesCtrl.index being hit');
  Family.find({}).then(fam => {
    console.log(fam);
    res.json(fam);
  })

}

function joinFamily(req, res) {
  // check if inputted family id exists, if so join fam

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