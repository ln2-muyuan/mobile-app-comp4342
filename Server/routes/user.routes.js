const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.get('/', function(req, res){
   console.log('GET received at user.route.js');
   res.send('GET received at user.route.js');
});


router.post('/', function(req, res){
   console.log('POST received at user.route.js');
   userController.register(req, res);   
});


module.exports = router;