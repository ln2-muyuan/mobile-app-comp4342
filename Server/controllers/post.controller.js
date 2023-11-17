const Post = require('../models/post.model');

exports.test = async function (req, res) {
    console.log("whaaatttt");
    res.send("Post created successfully");
    // let post = new Post(
    //     {
    //         text: req.body.text
    //     }
    // );

    // try {
    //     console.log("post.controller.js: post = ", post);
    //     await post.save();
    //     res.send("Post created successfully");
    // }
    // catch (err) {
    //     console.log(err);
    //     res.send("Post creation failed");
    // }
}



exports.create = async function (req, res) {

    res.send("Post created successfully");
    // let post = new Post(
    //     {
    //         text: req.body.text
    //     }
    // );

    // try {
    //     console.log("post.controller.js: post = ", post);
    //     await post.save();
    //     res.send("Post created successfully");
    // }
    // catch (err) {
    //     console.log(err);
    //     res.send("Post creation failed");
    // }
}
