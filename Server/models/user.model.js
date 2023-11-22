const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    email:{type: String, required:true, unique:true},
    name: {type: String, required:true},
    password: {type: String, required:true},
    createdAt: {
        type: Date,
        default: Date.now
      },
    avatar: {type: String, default: null}
});

const UserModel = model('User', userSchema);

module.exports = {UserModel};