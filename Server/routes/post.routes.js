const express = require('express');
const postController = require('../controllers/post.controller');

const router = express.Router();

router.get('/', postController.get);


router.post('/', function(req, res){
   console.log('POST received at post.route.js');
   postController.create(req, res);   
});


module.exports = router;