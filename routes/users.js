var express = require('express');
var router = express.Router();

// Require the User model
var Bar = require('../models/User');
// var Bar = require('./models/user')

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.render('users');
});

var passThisAlong = {};
router.post('/createe', function(req, res, next) {
<<<<<<< HEAD
  var waitTime = req.body.waitTime;
  var drinkType = req.body.drinkType;
  var barName = req.body.barName;
  var differentBar = req.body.differentBar;
  var userName = req.body.userName;

  console.log("The current logged in user is ",userName);
=======
  var barName = req.body.name;
  var waitTime = req.body.waitTime;
  var drinkType = req.body.drinkType;
  console.log("barname is ",barName, "waitTime is ", waitTime, "drinkType is ", drinkType)
>>>>>>> master

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

<<<<<<< HEAD
  var newBar = Bar
  ({
    name: barName,
    comments: drinkType,
    users: 
    [{
      type_wait_time : 
      {
=======
  var newBar = Bar({
      name: barName,
      comments: drinkType,
      users: [{type_wait_time : {
>>>>>>> master
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
router.get('/average', function(req, res, next) {
  //res.send('respond with a resource');
  console.log("justin");
  var barNames = [];
  var userNamesArray = [];
  var userObjectArray = [];
  var avgDrinkTime = 0;
  Bar.find({}, function(err, barArray) {
    if(err) {
      console.log("The error is ",err);
      throw err;
    } else {

      passThisAlong = barArray;
    }
    barArray.forEach(function(individualBar, index){
      var totalDrinkTime = 0;
      var totalNumberDrinks = 0;
      individualBar.users.forEach(function(individualUser, userIndex){
      userNamesArray.push(individualUser.name);
      userObjectArray.push(individualUser);
      for (drinkType in individualUser.type_wait_time)
      {
        if (individualUser.type_wait_time[drinkType]){
          totalDrinkTime += individualUser.type_wait_time[drinkType];
          totalNumberDrinks++;
          }
        }
     });
      individualBar.avg_wait_time = totalDrinkTime / totalNumberDrinks;
        var average = totalDrinkTime / totalNumberDrinks;
        Bar.findOneAndUpdate({name: individualBar.name }, {avg_wait_time:  f}, function(err, bar){
          if (err) console.log(err);
          console.log(average, "average", individualBar.name);
        });
    });
    res.render('test', {userNames: userNamesArray})
  });
}); 
router.post('/test/:searchedItem', function(req, res, next) {
    var barQuery = req.params.searchedItem;
    Bar.find({ name: barQuery},  function(err, documents) {
      if (err) console.log(err);
      var searchedBar = documents[0];
       res.render('users',{title: passThisAlong, name:searchedBar.name, avgWaitTime: searchedBar.avg_wait_time});
    });
});
router.get('/', function(req, res, next) {

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

router.get('/average', function(req, res, next) {
  //res.send('respond with a resource');
  console.log("justin");
  var barNames = [];
  var userNamesArray = [];
  var userObjectArray = [];
  var avgDrinkTime = 0;
  Bar.find({}, function(err, barArray) {
    if(err) {
      console.log("The error is ",err);
      throw err;
    } else {

      passThisAlong = barArray;
    }
    barArray.forEach(function(individualBar, index){
      var totalDrinkTime = 0;
      var totalNumberDrinks = 0;
      individualBar.users.forEach(function(individualUser, userIndex){
      userNamesArray.push(individualUser.name);
      userObjectArray.push(individualUser);
      for (drinkType in individualUser.type_wait_time)
      {
        if (individualUser.type_wait_time[drinkType]){
          totalDrinkTime += individualUser.type_wait_time[drinkType];
          totalNumberDrinks++;
          }
        }
     });
      individualBar.avg_wait_time = totalDrinkTime / totalNumberDrinks;
        var average = totalDrinkTime / totalNumberDrinks;
        Bar.findOneAndUpdate({name: individualBar.name }, {avg_wait_time: average}, function(err, bar){
          if (err) console.log(err);
          console.log(bar);
          console.log(average, "average", individualBar.name);
        });
    });
    // console.log(totalNumberDrinks, "totalNumberDrinks");
    // console.log(totalDrinkTime, "totalDrinkTime");
    res.render('test', {userNames: userNamesArray})
  });
});

module.exports = router;
