var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// module.exports = mongoose.model('User', new Schema({
// 	name: String,
// 	email: String,
// 	bars_visited: Array,
// 	drinks_ordered: Array,
// 	comments: Array,
// 	timestamps: Date
// }));
<<<<<<< HEAD

// module.exports = mongoose.model('Bar', new Schema({
// 	name: String,
// 	address: String,
// 	avg_wait_time: Number,
// 	users: Array,
// 	type_sold: Array
// }));

// Schema: creates document structure
=======

// module.exports = mongoose.model('Bar', new Schema({
// 	name: String,
// 	address: String,
// 	avg_wait_time: Number,
// 	users: Array,
// 	type_sold: Array
// }));

//Schema: creates document structure
var barSchema = mongoose.Schema ({
	name: String,
	address: String,
	avg_wait_time: Number,
	users: Array,
	type_sold: Array
});

//Model: creates the collection with document structure
var Bar = mongoose.model('Bar', barSchema);

//Document: creates a new document in the collection
var newBar = new Bar ({name: "Lucky's Lounge">, address: "123 Main St., Austin, TX 78704"})

//Save to database:
newBar.save

//date.now

//Bar.find({avg_wait_time}),
>>>>>>> 0e100e2354abb8ed284fa08ff0719468d9b6b7bc
