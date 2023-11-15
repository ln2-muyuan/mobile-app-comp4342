const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.get('/', function(req, res){
   console.log('GET received at user.route.js');
   res.send('GET received at user.route.js');
});


router.post('/register', function(req, res){
   console.log('POST received at user.route.js');
   userController.register(req, res);   
});


router.post('/login', function(req, res){
   console.log('POST received at user.route.js');
   userController.login(req, res);   
});


module.exports = router;