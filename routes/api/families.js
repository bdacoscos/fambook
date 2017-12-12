var express = require('express');
var router = express.Router();
var familiesCtrl = require('./../../controllers/familiesCtrl');

// route for /families
router.get('/', familiesCtrl.index);

module.exports = router;