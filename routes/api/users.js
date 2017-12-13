var express = require('express');
var router = express.Router();
var usersCtrl = require('./../../controllers/usersCtrl');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);


/*---------- Protected Routes ----------*/



module.exports = router;