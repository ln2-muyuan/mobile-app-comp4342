const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    email:{type: String, required:true, unique:true},
    username: {type: String, required:true},
    password: {type: String, required:true},
});

const UserModel = model('User', userSchema);

module.exports = {UserModel}














// const { DataTypes } = require('sequelize');

// module.exports = (sequelize) => {
//     const User = sequelize.define('user', {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         email: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         password: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//     }
//     );
//     return User;
// }