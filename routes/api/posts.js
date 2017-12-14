var express = require('express');
var router = express.Router();
var postsCtrl = require('./../../controllers/postsCtrl');

/*---------- Public Routes ----------*/
// None, need to be logged in to see anything!!


/*---------- Protected Routes ----------*/
router.get('/post', postsCtrl.indexFamilyPosts);
router.post('/post', postsCtrl.createPost);



/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'Not authenticated' });
}



module.exports = router;