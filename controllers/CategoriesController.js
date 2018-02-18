var Categories = require('../models/Categories');

exports.allCategories = function(req, res){
	Categories.find(function (err, cat) {
		if(err){
			res.send(err);
		}
		res.send(cat);
	});
};

exports.findCategoryById = function(req, res){
	Categories.findById(req.params.category_id, function (err, cat){
		if(err)
			res.send(err);
		res.json(cat);
	});
};

exports.addCategory = function(req, res){
	var cat = new Categories();
	cat.name = req.body.name;
	cat.save(function (err){
		if(err){
			res.send(err);
		}
		res.send({message:'Category Created ! ' + cat.name})
	});
};

exports.updateCategory = function(req, res){
	Categories.findById(req.params.category_id, function(err, cat){
		if(err){
			res.send(err);
		}
		
		cat.name = req.body.name;
		
		cat.save(function(err){
			if(err)
				res.send(err);
			
			res.json({ message: 'Category Updated!'});
		});
	});
};