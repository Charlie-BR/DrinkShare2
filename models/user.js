var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var findOrCreate = require('mongoose-findorcreate')
var ClickSchema = new Schema({mongoose });
ClickSchema.plugin(findOrCreate);
var Click = mongoose.model('Click', ClickSchema);

module.exports = mongoose.model('User', new Schema({
	name: String,
	email: String,
	bars_visited: Array,
	drinks_ordered: Array,
	comments: Array,
	timestamps: Date
}));

module.exports = mongoose.model('Bar', new Schema({
	name: String,
	address: String,
	avg_wait_time: Number,
	users: Array,
	type_sold: Array
}));

// module.exports = router;

//Schema: creates document structure
//var barSchema = mongoose.Schema ({
// 	name: String,
// 	addresss: String,
// })

//Model: creates the collection with document structure
//var Bar = mongoose.model('Bar', barSchema);

//Document: creates a new document in the collection
//var newBar = new Bar ({name: <value from form input, saved as variable>, address<value from form input, saved as variable>})

//Save to database:
//newBar.save