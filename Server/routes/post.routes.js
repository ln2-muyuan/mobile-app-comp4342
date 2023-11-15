const express = require('express');
const loginAuth = require('../middleware/auth');
const postController = require('../controllers/post.controller');

const router = express.Router();

// router.get('/', function(req, res){
//    console.log('GET received at post.route.js');
//    res.send('GET received at user.route.js');
// });



// test login auth here
router.post('/', loginAuth.loginAuth, postController.create);


// test login auth here
// router.post('/', function(req, res){
//    console.log('POST received at post.route.js');
//    loginAuth.loginAuth(req, res, postController.create);
// });

module.exports = router;