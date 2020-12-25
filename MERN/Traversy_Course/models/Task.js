const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema object
const Task = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const taskModel = mongoose.model('Task', Task);

module.exports = taskModel;
