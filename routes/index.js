var express = require('express');
var router = express.Router();

var routes = require('./routes/index');
var users = require('./models/users');


/* GET main page. */
// router.get('/users', function(req, res, next) {
//   res.render('users');
// });


/* GET home page. */
router.get('/', function(req, res, next) {

//   FB.api(
//     "/me",
//     function (response) {
//       if (response && !response.error) {
//         // console.log("the information back from facebook is ",response);
//       }
//     }
// );
  res.render('index', { title: 'Express' });
});


module.exports = router;