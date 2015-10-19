var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("This is a test");
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
