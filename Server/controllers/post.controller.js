const Post = require('../models/post.model');
const {UserModel} = require('../models/user.model');

exports.get = async function (req, res) {
    try {
        if (req.params.email) {

            const posts = await Post.find({ email: req.params.email })
            const user = await UserModel.findOne({ email: posts.email });
            res.send({
                content: posts,
                name: user? user.name : null,
                email: user? user.email : null,
                avatar: user? user.avatar : null,
            });
            return;
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
    let post = new Post(
        {
            email: req.body.email,
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


