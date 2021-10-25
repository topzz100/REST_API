const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

const Post = mongoose.model("post", UserSchema);

module.exports = Post;