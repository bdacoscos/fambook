var Post = require('./../models/Post');
var Family = require('./../models/Family');

function index(req, res) {
  Post.find({}).then(posts => {
    res.json(posts);
  })

}

function createPost(req, res) {

  var newPost = new Post(req.body);
  newPost.save().then(post => {
    Family.findOne({ user: req.user._id}).exec(
      (err, fam) => {
        fam.posts.push(newPost);
        fam.save()
      });
    res.json(post);
  }).catch(err => res.status(400).json(err));
}

module.exports = {
  index,
  createPost
}