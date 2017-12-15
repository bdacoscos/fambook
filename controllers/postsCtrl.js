var Post = require('./../models/Post');
var Family = require('./../models/Family');

function index(req, res) {
  Post.find({}).then(posts => {
    res.json(posts);
  })

}

function createPost(req, res) {
  console.log('createPost in postsCtrl hit');
  console.log('req.body: ', req.body);

  var newPost = new Post(req.body);
  newPost.save().then(post => {
    console.log('HI')
    Family.findOne({ familyCode: '5a33179400d55100049ea770'}).populate('posts').exec(
      (err, fam) => {
        console.log('we found the family');
        fam.posts.push(newPost);
        console.log('fam is: ', fam);
        console.log('newPost is: ', newPost);
        fam.save()
      });
    console.log('this is post: ', post);
    res.json(post);
  }).catch(err => res.status(400).json(err));
}

module.exports = {
  index,
  createPost
}