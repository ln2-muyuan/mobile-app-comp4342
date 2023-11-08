const express = require('express')
const userRoute = require('./user.routes')

const router = express.Router();

router.use('/user',userRoute)

module.exports = router