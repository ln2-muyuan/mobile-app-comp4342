const User = require('../models/user.model');

exports.register = async function (req, res) {
    let user = new User(
        {
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
