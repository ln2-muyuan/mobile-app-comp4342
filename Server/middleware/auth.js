const jwt = require('jsonwebtoken')
const {secret} = require('../controllers/user.controller')

const loginAuth = async (req, res, next) => {
    const authHeader = req.get("Authorization");
    if (!authHeader) {
        return res.status(401).json({ message: 'not authenticated' });
    };
    const token = authHeader.split(' ')[1];
    let decodedToken; 
    try {
        decodedToken = await jwt.verify(token, secret);
        if (!decodedToken) {
            return res.status(401).json({ message: 'unauthorized' });
        } else {
            return next()
        };
    } catch (e) {
        return res.status(500).json({ message: e.message });
    };
}

module.exports = {loginAuth}