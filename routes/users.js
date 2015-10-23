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
router.post('/createe', function(req, res, next) {
  var waitTime = req.body.waitTime;
  var drinkType = req.body.drinkType;
  var barName = req.body.barName;
  var differentBar = req.body.differentBar;
  var userName = req.body.userName;

  // console.log("Bar name: ",barName, " Drink type: ",drinkType, " Wait time: ",waitTime, "Other bar is: ",differentBar);
  console.log("The current logged in user is ",userName);

  var beerWaitTime = null;
  var cocktailWaitTime = null;
  var wineWaitTime = null;
  var liquorWaitTime = null;

  if (drinkType === "beer")
  {
    beerWaitTime = waitTime;
  }
  else if (drinkType === "wine")
  {
    wineWaitTime = waitTime;
  }
  else if (drinkType === "liquor")
  {
    liquorWaitTime = waitTime;
  }
  else if (drinkType === "cocktail")
  {
    cocktailWaitTime = waitTime;
  }

  var newBar = Bar
  ({
    name: barName,
    comments: drinkType,
    users: 
    [{
      type_wait_time : 
      {
        beer : beerWaitTime,
        cocktail : cocktailWaitTime,
        wine : wineWaitTime,
        liquor : liquorWaitTime
      },
      name : userName
    }]
  });

  newBar.save(function(err) {
      if (err) console.log(err);
  });
  res.redirect('/users')
}); 
router.post('/test/:searchedItem', function(req, res, next) {
    var barQuery = req.params.searchedItem;
    Bar.find({ name: barQuery},  function(err, documents) {
      if (err) console.log(err);
      var searchedBar = documents[0];
      console.log("name: ",searchedBar.name,"average wait: ",searchedBar.avg_wait_time, " Other thing ",searchedBar.users[0].type_wait_time.beer)
      //  type_wait_time: { liquor: null, wine: null, cocktail: null, beer: 2 },

    // address: '709 E 6th St, Austin, TX 78701',

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
      res.render('users', { title: passThisAlong, name: "", avgWaitTime:""});
  });
});

module.exports = router;
