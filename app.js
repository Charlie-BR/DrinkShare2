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



var barSchema = mongoose.Schema ({
  name: String,
  address: String,
})

// Model: creates the collection with document structure
var Bar = mongoose.model('Bar', barSchema);


// Document: creates a new document in the collection
var newBar = new Bar ({name: "sup", address:"supppppppp"});

//Save to database:
newBar.save


// Bar.find({},function(err,bar){

// console.log("bar is ",bar);
//     });
 Bar.find({},function(err,bar){
  console.log("New bar stuff is ",bar);
  var minWaitTime;
  for(var i = 0; i < bar.length; i ++)
  {
    if (i === 0)
    {
      minWaitTime = bar[0].avg_wait_time;
    }
    else if(bar[0].avg_wait_time < minWaitTime)
    {
      minWaitTime = bar[i].avg_wait_time
      indexThatWeWant = i;
    }

  }


  bar.collection.avg_wait_time
  });


// Mongoose connection
//var mongoose = require('mongoose');
//mongoose.connect(process.env.MONGO_DB_CONN_DRINK_SHARE);
//mongoose.connect('mongodb://'+process.env.WDI_MONGOLAB_USER+':'+process.env.WDI_MONGOLAB_PW+'@ds041394.mongolab.com:41394/drink_share');

var mongoose = require('mongoose')
mongoose.connect('mongodb://'+process.env.WDI_MONGOLAB_USER+':'+process.env.WDI_MONGOLAB_PW+'@ds041394.mongolab.com:41394/drink_share');

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
