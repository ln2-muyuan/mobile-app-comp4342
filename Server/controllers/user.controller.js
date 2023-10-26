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