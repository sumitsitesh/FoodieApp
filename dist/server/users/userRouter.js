'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const mongoose = require('mongoose');
const User = require('./userEntity');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const connectflash = require('connect-flash');

//const userCtrl = require('./userController');

router.post('/login',
    passport.authenticate('local', {
  failureFlash: 'Invalid Username and Password',
  successFlash: "Welcome to foodie App"}
),
function(req, res) {
    res.json({responseText:'authenticated'});
}
);

router.get('/logout', function(req, res){
console.log('Session deleted');
req.session.destroy();
res.send({redirect : '/'});
});

router.post('/add', function(req, res) {
    logger.debug("Inside user post");
    // let user = req.body;
    var newUser = new User({
    	username : req.body.username,
  		password : req.body.password
    });
    newUser.save().then((doc) => {
    	console.log('Insertion succes', doc);
    	res.send("Insertion success");
    },
    (err) => {
    	console.log(err);
    	res.send(err,"not saved");
    });
});

// Get details of all user in the system
router.get('/', function(req, res) {
  console.log('Inside get');
  User.find().then((docs) => {
        res.send({
            docs
        });
  res.send('response from user GET route check123');
});
});

module.exports = router;
