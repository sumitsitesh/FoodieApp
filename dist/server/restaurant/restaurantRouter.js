'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const restaurant = require('./restaurantEntity');
//const userCtrl = require('./userController');

router.post('/addRestaurant', function(req, res) {
    logger.debug("Inside user post");
   var id = req.body.resId;

if(isNaN(id)){
    res.send("Invalid ID");
    return;
  }
  var name=req.body.resName;
  if(name === '' || !isNaN(name)){
    res.send("Invalid Name");
    return;
  }
  var desc=req.body.location;
  if(desc === '' || !isNaN(desc)){
    res.send("Invalid Location");
    return;
  }
   var name = req.body.resName;
   var rating = req.body.ratings;
   var location = req.body.location;
   var locality = req.body.locality;
   var db = new restaurant(req.body);
   db.save(function(err){
   	if(err){
   		res.send("Error:"+err);
   	}
   	else{
   		res.send("AddedSucessfully");
   	}
   });
});

router.delete('/deleteRestaurant', function(req, res) {
    logger.debug("Inside user post");
   var id = req.body.resId;

   if(isNaN(id)){
    	res.send("Invalid Id");
    	return;
    }
    restaurant.remove(req.body,function(err,docs){
    	
    	if(err){
    		res.send("Error:"+err);
    	}

    	else{
    	res.send("Deleted Sucessfully");
    }

    });
    
});



router.put('/updateRestaurant', function(req, res) {
    logger.debug("Inside user post");
   var id = req.body.resId;
    var comment = req.body.comments;
    if(isNaN(id)){
    	res.send("Invalid Id");
    	return;
    }
    restaurant.update({"resId" : id}, {"comments":comment}, function(err){
    	if(err){
           res.send("Error:"+err);
    	}
    	else{
    		 res.send("UpdatedSucessfully");
    	}
    });
   
});

router.get('/getRestaurant', function(req, res) {
    logger.debug("Inside ress get");
restaurant.find(function(err,docs){
	if(err){
           res.send("Error:"+err);
    	}
    	else{
    		res.send(docs );
    	}
});
    
});


module.exports = router;
