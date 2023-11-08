const express = require('express')
const {register} = require('../controllers/user.controller')

const router = express.Router();

//register a user with {username, password, nickname}
router.post('/register',register)

module.exports = router







// const express = require('express');
// const userController = require('../controllers/user.controller');


// const router = express.Router();
// router.get('/', function(req, res){
//    console.log('GET request received');
//    // userController.findAll(req, res);
//    res.send('GET method route');
// });
// router.post('/', function(req, res){
//    console.log('POST request received');
//    userController.create(req, res);
   
// });
// module.exports = router;