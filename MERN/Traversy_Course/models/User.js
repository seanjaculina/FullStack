const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema object
const User = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  registerDate: {
    type: Date,
    default: Date.now(),
  },
  tasks: [],
});

const userModel = mongoose.model('User', User);
module.exports = userModel;
