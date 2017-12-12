var express = require('express');
var router = express.Router();
var usersCtrl = require('./../controllers/usersCtrl');


router.post('/signup', usersCtrl.signup);

module.exports = router;