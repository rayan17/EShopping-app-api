
var Items = require('../models/Items');

exports.allItems = function(req, res){
	Items.find(function (err, items) {
		if(err){
			res.send(err);
		}
		res.send(items);
	});
};

exports.findItemById = function(req, res){
	Items.findById(req.params.items_id, function (err, item){
		if(err)
			res.send(err);
		res.json(item);
	});
};

exports.addItem = function(req, res){
	var i = new Items();
	i.name = req.body.name;
	i.price = req.body.price;
	i.instock = req.body.instock;
	i.photo = req.body.photo;
	i.save(function (err){
		if(err){
			res.send(err);
		}
		res.send({message:'Items Created !' + i.name})
	});
};

exports.updateItem = function(req, res){
	Items.findById(req.params.item_id, function(err, i){
		if(err){
			res.send(err);
		}
		
		i.name = req.body.name;
		i.price = req.body.price;
		i.instock = req.body.instock;
		i.photo = req.body.photo;
		
		i.save(function(err){
			if(err)
				res.send(err);
			
			res.json({ message: 'Product Updated!'});
		});
	});
};

exports.deleteItem = function(req, res){
	Items.remove({_id: req.params.item_id}, function (err, data){
		if(err){
			res.status(500).send({message: "Could not delete item with id" + req.params.item_id});
		}else{
			res.send({message: "Item deleted successfully!	"})
		}
	});
};