const Post = require('../models/post.model');
const User = require('../models/user.model');

exports.get = async function (req, res) {
    try {
        let posts = await Post.find();
        const emails = posts.map((post) => post.email);
        const users = await User.find({ email: { $in: emails } });
        posts = posts.map((post) => {
            const user = users.find((user) => user.email === post.email);
            return {
                content: post,
                name: user? user.name : null,
                avatar: user? user.avatar : null,
            };
        });

        res.send(posts);
    }
    catch (err) {
        console.log(err);
        res.send("Failed to get posts");
    }
}

exports.create = async function (req, res) {
    let post = new Post(
        {
            email: req.body.email,
            title: req.body.title,
            text: req.body.text,
            image: req.body.image,
        }
    );
    try {
        console.log("post.controller.js: post = ", post);
        await post.save();
        res.send("Post created successfully");
    }
    catch (err) {
        console.log(err);
        res.send("Post creation failed");
    }
}
