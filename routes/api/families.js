var express = require('express');
var router = express.Router();
var familiesCtrl = require('./../../controllers/familiesCtrl');

/*---------- Public Routes ----------*/

// None, need to be logged in to see anything!!


/*---------- Protected Routes ----------*/

router.get('/', familiesCtrl.index);



module.exports = router;