const jwt = require('jsonwebtoken')


exports.loginAuth = async function (req, res, next) {
    console.log(req);
    const token = req.header('auth-token')
    if (!token) {
        return res.status(401).send("Access denied")
    }
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        next(req, res)
    }
    catch (err) {
        res.status(400).send("Invalid token")
    }
}
