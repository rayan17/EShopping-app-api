var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategoriesSchema = new Schema({
name : String
});

module.exports = mongoose.model('Categories', CategoriesSchema);
