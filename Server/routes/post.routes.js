const express = require('express');
const loginAuth = require('../middleware/auth');
const postController = require('../controllers/post.controller');

const router = express.Router();


// router.post('/', loginAuth.loginAuth, postController.test);
router.get('/', postController.get);
router.post('/', postController.create);


module.exports = router;