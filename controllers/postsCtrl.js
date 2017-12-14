var Post = require('./../models/Post');
// var Family = require('./../models/Family');

function indexFamilyPosts(req, res) {
  // INDEX ALL FAMILY POSTS FOR CURRENT USER'S FAMILY

  // acquire Family model to access family

  // Family.find({users: req.user._id}, function (err, families) {
  //   console.log(families)
  //   res.status(200).json(families);
  // });

}

// function joinFamily(req, res) {
//   Family.findOne({ familyCode: req.body.familyCode }).then((fam => {
//     fam.users.push(req.body._id);
//     fam.save();
//     res.json(fam);
//   }));
// }


function createPost(req, res) {
  console.log('createPost in postsCtrl hit');
  var newPost = new Post(req.body);
  newPost.save().then( post => {
    res.json(post);
  }).catch(err => res.json(400).json(err));


  // grab current user's id -> put into 'authorId'

  // attach authorId -> current post

  newPost.save().then(post => {
    res.json(post);
  }).catch(err => res.json(400).json(err));
}

module.exports = {
  indexFamilyPosts,
  createPost
}