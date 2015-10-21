var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
module.exports = Bar;