const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: false
  },
  text: {
    type: String,
    required: true
  },
  image:{
    type: [String],
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;