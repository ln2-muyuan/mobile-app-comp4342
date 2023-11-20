const express = require('express')
const {register, login, updateUserInfo,getUserInfo} = require('../controllers/user.controller')

const router = express.Router();

router.post('/register',register)
router.post('/login',login)
//update user information with {email, avatar}
router.post('/update', updateUserInfo)
//get user information {email}
router.get('/info', getUserInfo)

module.exports = router
