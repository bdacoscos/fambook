var Post = require('./../models/Post');
var Family = require('./../models/Family');

function indexFamilyPosts(req, res) {
  // INDEX ALL FAMILY POSTS FOR CURRENT USER'S FAMILY

  // acquire Family model to access family

  // Family.find({users: req.user._id}, function (err, families) {
  //   console.log(families)
  //   res.status(200).json(families);
  // });

}

function createPost(req, res) {
  console.log('createPost in postsCtrl hit');
  console.log(req.body);
  console.log(req.body.post);
  var newPost = new Post(req.body.post);
  // Family.findOne({ familyCode: })
  newPost.save().then(post => {
    console.log('HI')
    res.json(post);
  }).catch(err => res.status(400).json(err));

  // grab current user's id -> put into 'authorId'
  // attach authorId -> current post


}

module.exports = {
  indexFamilyPosts,
  createPost
}