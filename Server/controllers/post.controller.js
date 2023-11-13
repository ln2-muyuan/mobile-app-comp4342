const Post = require('../models/post.model');

exports.create = async function (req, res) {
    let post = new Post(
        {
            text: req.body.text
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
