const express = require('express');
const loginAuth = require('../middleware/auth');
const postController = require('../controllers/post.controller');

const router = express.Router();

// router.get('/', function(req, res){
//    console.log('GET received at post.route.js');
//    res.send('GET received at user.route.js');
// });



// router.post('/', loginAuth.loginAuth, postController.test);
router.post('/', postController.create);


module.exports = router;