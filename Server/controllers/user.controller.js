const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.register = async function (req, res) {
    let user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
    );
    try {
        await user.save();
        res.send("User created successfully");
    }
    catch (err) {
        console.log(err);
        res.send("User creation failed");
    }
}

exports.login = async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    try {
        const user = await User.findOne( {email: email} )
        if (!user) {
            return res.status(400).send("User not found");
        }
        if (user.password !== password) {
            return res.status(400).send("Password incorrect");
        }
        else {
            const token = jwt.sign( {email}, process.env.TOKEN_SECRET );
            res.header('auth-token', token).send(token);
        }
    }
    catch (err) {
        console.log(err);
        res.send("Login failed");
    }
}

exports.uploadAvatar = async function (req, res) {
    const email = req.body.email;
    const avatar = req.body.avatar;
    try {
        const user = await User.findOne( {email: email} )
        user.avatar = avatar;
        await user.save();
        res.send("Avatar uploaded successfully");
    }
    catch (err) {
        console.log(err);
        res.send("Avatar upload failed");
    }
}

exports.getUserInfo = async function (req, res) {
    const email = req.query.email;
    try {
        const user = await User.findOne( {email: email} )
        if (!user) {
            
            return res.status(400).send("User not found");
        }
        else {
            res.send(user);
        }
    }
    catch (err) {
        console.log(err);
        res.send("Get user info failed");
    }
}