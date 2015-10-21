var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Request API access: http://www.yelp.com/developers/getting_started/api_access

var yelp = require("yelp").createClient({
  consumer_key: "Q5B_DgFawdTD0bnT5vvgjg", 
  consumer_secret: "qnAofE8977lcZmeE8qWKx9MKZus",
  token: "XlNR_Sn9vSmPOzcxczMyeClhVYQtC5so",
  token_secret: "fECg0XSbs6I8XyKcmgNkZjVq0tk"
});

// See http://www.yelp.com/developers/documentation/v2/search_api
yelp.search({term: "food", location: "Montreal"}, function(error, data) {
  console.log(error);
  console.log(data);
});

// See http://www.yelp.com/developers/documentation/v2/business
yelp.business("yelp-san-francisco", function(error, data) {
  console.log(error);
  console.log(data);
});

// var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_DB_CONN_DRINK_SHARE);
// mongoose.connect('mongodb://'+process.env.WDI_MONGOLAB_USER+':'+process.env.WDI_MONGOLAB_PW+'@ds041394.mongolab.com:41394/drink_share');

//Schema: creates document structure

//Model: creates the collection with document structure

//Document: creates a new document in the collection
//var newBar = new Bar ({name: "Lucky's Lounge", address: "123 Main St., Austin, TX 78704"});

//Save to database:

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
