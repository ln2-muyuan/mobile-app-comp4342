const Post = require('../models/post.model');
const {UserModel} = require('../models/user.model');
const jwt = require('jsonwebtoken')
const {secret} = require('./user.controller')

exports.get = async function (req, res) {
    try {
        if (req.query.email) {
            console.log("post.controller.js: req.query.email = ", req.query.email);
            const posts = await Post.find({ email: req.query.email })
            const user = await UserModel.findOne({ email: req.query.email });
            const usedPosts = posts.map((post) => {
                return {
                    content: post,
                    name: user? user.name : null,
                    email: user? user.email : null,
                    avatar: user? user.avatar : null,
                };
            })
            return res.status(200).json({posts:usedPosts});
        } else {
            let posts = await Post.find();
            const emails = posts.map((post) => post.email);
            const users = await UserModel.find({ email: { $in: emails } });
            posts = posts.map((post) => {
                const user = users.find((user) => user.email === post.email);
                return {
                    content: post,
                    name: user? user.name : null,
                    email: user? user.email : null,
                    avatar: user? user.avatar : null,
                };
            });
            res.send(posts);
            return;
        }
    }
    catch (err) {
        console.log(err);
        res.send("Failed to get posts");
    }
}


exports.create = async function (req, res) {
    console.log("post.controller.js: req.body = ", req.body);
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
        } 
    } catch (e) {
        return res.status(500).json({ message: e.message });
    };
    console.log("post.controller.js: decodedToken = ", decodedToken);
    let post = new Post(
        {
            email: decodedToken.email,
            title: req.body.title,
            text: req.body.text,
            image: req.body.image,
            location: req.body.location,
        }
    );

    try {
        console.log("post.controller.js: post = ", post);
        await post.save();
        return res.status(200).json({message: "Post created successfully"});
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({message: err.message});
    }
}


