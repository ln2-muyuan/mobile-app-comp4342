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

module.exports = {register, secret, login}

































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