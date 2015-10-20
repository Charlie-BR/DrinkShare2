var express = require('express');
var router = express.Router();
var passport = require('passport');
//var routes = require('./routes/index');
//var users = require('./models/users');

// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
router.get('/auth/facebook', passport.authenticate('facebook'));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
router.get('/auth/facebook/callback',
passport.authenticate('facebook', 
	{ successRedirect: '/', failureRedirect: '/login' }));
router.get('/auth/facebook',
passport.authenticate('facebook', { scope: ['user_status', 'user_checkins'] }));
/* GET main page. */
// router.get('/users', function(req, res, next) {
//   res.render('users');
// });


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;