const jwt = require('jsonwebtoken')


exports.loginAuth = async function (req, res, next) {
    const token = req.header('auth-token')
    if (!token) {
        return res.status(401).send("Access denied")
    }
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        console.log("req headers = ", req.headers)
        console.log("req user = ", req.user)
        console.log("req body = ", req.body)
        next()
    }
    catch (err) {
        res.status(400).send("Invalid token")
    }
}
