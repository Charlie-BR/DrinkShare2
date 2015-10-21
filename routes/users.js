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
    
router.post('/test/:searchedItem', function(req, res, next) {
    var barQuery = req.params.searchedItem;
    Bar.find({ name: barQuery},  function(err, user) {
      if (err) console.log(err);
      var searchedBar = user[0];
      console.log("name: ",searchedBar.name,"average wait: ",searchedBar.avg_wait_time);
      //  type_wait_time: { liquor: null, wine: null, cocktail: null, beer: 2 },
    // avg_wait_time: 2,
    // address: '709 E 6th St, Austin, TX 78701',
    // name:
       res.render('users',{title: passThisAlong, name:searchedBar.name, avgWaitTime: searchedBar.avg_wait_time});
    });

});
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  Bar.find({}, function(err, documents) {
  if(err) {
    console.log("The error is ",err);
    throw err;
  } else {

    passThisAlong = documents;
  }
});
  res.render('users', { title: passThisAlong, name: "", avgWaitTime:""});
});

module.exports = router;
