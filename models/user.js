var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var express = require('express');
// var router = express.Router();
// var userSchema = require('../models/user.js')

// var mongoose = require('mongoose');

// mongoose.connect('mongodb://'+process.env.WDI_MONGOLAB_USER+':'+process.env.WDI_MONGOLAB_PW+'@ds039404.mongolab.com:39404/drink_share');

module.exports = mongoose.model('User', new Schema({
	name: String,
	bars_visited: String,
	drinks_ordered: String
}));


// var userSchema = new mongoose.Schema({
// 	name: { type: string, required: true },
// 	bars_visited { type: string }
// 	drinks_ordered { type: string }
// });

// var drinkSchema = new mongoose.Schema({
// 	name: { type: string, required: true },
// 	drink_type: { type: string, required: true },
// 	wait_time: { type: number },
// 	bar_location: { type: string }
// });

// var barSchema = new mongoose.Schema({
// 	name: { type: string, required: true },
// 	address: { type: string }
// })

//var User = mongoose.model('User', userSchema);

// // Make this available to other files
//module.exports = User;