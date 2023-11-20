const {UserModel} = require('../models/user.model')
const jwt = require('jsonwebtoken')

const secret = "secret"

const register = async (req, res) => {
    const {name, password, email} = req.body;
    try {
        const newUser = new UserModel({
            name,
            password,
            email
        })
        await newUser.save()
        return res.status(200).json({message: "User created successfully"});
    } catch (e) {
        return res.status(500).json({message: e.message});
    }
}

const login =  async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await UserModel.findOne({email:email})
        if(!user) return res.status(401).json({message: "Email or password are not correct"});
        if(password === user.password) {
            const token = jwt.sign({email},secret,{expiresIn:'7d'})
            res.status(200).json({token:token});
        } else {
            return res.status(401).json({message: "Username or password are not correct"});
        }
    } catch (e) {
        return res.status(500).json({message: e.message});
    }
}

const updateUserInfo = async (req, res) => {
    //currently only update avatar
    const {avatar} = req.body;
    const {email} = req.body;
    //find the user and update the avatar
    try {
        const user = await UserModel.findOne({email:email})
        if(!user) return res.status(404).json({message: "User not found"});
        user.avatar = avatar;
        await user.save();
        return res.status(200).json({message: "User info updated successfully"});
    } catch (e) {
        return res.status(500).json({message: e.message});
    }
}

const getUserInfo = async (req, res) => {
    //get from query
    const {email} = req.query;
    try {
        const user = await UserModel.findOne({email:email})
        if(!user) return res.status(404).json({message: "User not found"});
        //delete password
        const userObj = {
            name: user.name,
            email: user.email,
            avatar: user.avatar
        }
        return res.status(200).json({message: "User info retrieved successfully", user: userObj});
    } catch (e) {
        return res.status(500).json({message: e.message});
    }
}

module.exports = {register, secret, login, updateUserInfo, getUserInfo}

































// const models = require("../models");
// const User = models.User;


// exports.create = (req, res) => {
//     if (!req.body.email) {
//         res.status(400).send({
//             message: "Content can not be empty!"
//         });
//         return;
//     }

//     const user = {
//         email: req.body.email,
//         password: req.body.password
//     };

//     User.create(user)
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while creating the User."
//             });
//         });
// }



// exports.findAll = async (req, res) => {
//     const data = await User.findAll();
//     res.send(data);
// }