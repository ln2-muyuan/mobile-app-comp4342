const express = require('express')
const userRoute = require('./user.routes')
const postRoute = require('./post.routes')

const router = express.Router();

router.use('/user',userRoute)
router.use('/post',postRoute)

module.exports = router