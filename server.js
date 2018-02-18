var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var mongoose = require('mongoose');

var itemsController	= require('./controllers/ItemsController');
var categoriesController	= require('./controllers/CategoriesController');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

var port = process.env.port || 3000;
var router = express.Router();

app.use(cors());
app.use('/api', router);
app.listen(port);

console.log('REST API is running at ' + port);

mongoose.connect('mongodb://localhost:27017/products');

router.use(function(req, res, next){
	console.log('Logging of request will be done here');
	next();
});
//Items routes
router.get('/items', itemsController.allItems);

router.get('/items/:item_id', itemsController.findItemById);

router.post('/items', itemsController.addItem);

router.put('/items/:item_id', itemsController.updateItem);

//Category routes
router.get('/categories', categoriesController.allCategories);

router.get('/categories/:category_id', categoriesController.findCategoryById);

router.post('/categories', categoriesController.addCategory);

router.put('/categories/:category_id', categoriesController.updateCategory);


