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
  console.log(`I'm trying to join a family!`);
  console.log("reqw.body!!", req.body);
  res.status(200);
}

function createFamily(req, res) {
  var family = new Family(req.body);
  family.save((err, createdFamily) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).send(createdFamily);
  })
}

module.exports = {
  index,
  joinFamily,
  createFamily
}