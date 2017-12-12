var express = require('express');
var router = express.Router();
var usersCtrl = require('./../controllers/usersCtrl');

console.log('Im in my route file')

router.get('/api/activity', usersCtrl.index);

module.exports = router;