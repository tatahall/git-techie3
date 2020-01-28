const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  username: {
    type: String
  },
  numberofrepos: {
    type: Number
  },
  location: {
    type: String
  },
  bio: {
    type: String
  },
  languages: {
    type: String
  },
  type: {
    type: String,
    default: 'nothireable'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('profile', ProfileSchema);
