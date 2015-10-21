var express = require('express');
var router = express.Router();

var routes = require('./routes/index');
var users = require('./models/users');

/* GET home page. */
router.get('/add', function(req, res, next) {

//   FB.api(
//     "/me",
//     function (response) {
//       if (response && !response.error) {
//         // console.log("the information back from facebook is ",response);
//       }
//     }
// );
  res.render('add', { title: 'Express' });
});


module.exports = router;