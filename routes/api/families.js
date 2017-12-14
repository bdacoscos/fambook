var express = require('express');
var router = express.Router();
var familiesCtrl = require('./../../controllers/familiesCtrl');

/*---------- Public Routes ----------*/
// None, need to be logged in to see anything!!


/*---------- Protected Routes ----------*/
router.get('/', familiesCtrl.index);
// router.post('/join', familiesCtrl.joinFamily);
router.post('/join', familiesCtrl.createFamily);



/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'Not authenticated' });
}



module.exports = router;