const express = require('express');
const postController = require('../controllers/post.controller');

const router = express.Router();

router.get('/', function(req, res){
   console.log('GET received at post.route.js');
   res.send('GET received at user.route.js');
});

router.post('/', function(req, res){
   console.log('POST received at post.route.js');
   postController.create(req, res);   
});


module.exports = router;