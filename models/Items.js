var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemsSchema = new Schema({
name : String,
price : Number,
instock : Boolean,
photo : String,
category: String
});

module.exports = mongoose.model('Items', ItemsSchema);
