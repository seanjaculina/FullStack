const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema object
const Task = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 6,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = TaskSchema = mongoose.model('Task', Task);
