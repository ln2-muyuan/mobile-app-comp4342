const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.get('/', function(req, res){
   res.send('GET received at user.route.js');
});


router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/uploadAvatar', userController.uploadAvatar);
router.get('/getUserInfo', userController.getUserInfo);


module.exports = router;