var express = require('express');
var router = express.Router();

// Require the User model
var Bar = require('../models/user');
// var Bar = require('./models/user')

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.render('users');
});

var passThisAlong = {};


router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  Bar.find({}, function(err, documents) {
  if(err) {
    console.log("The error is ",err);
    throw err;
  } else {
    console.log("Testing barrrrrrr", documents);
    passThisAlong = documents;
  }
});
  res.render('users', { title: passThisAlong});
});

module.exports = router;
