const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema object
const Task = new Schema({
  name: {
    type: String,
    required: true,
  },
  // A task will have a reference to a user that added it (One to many relatiotionship)
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // reference the user who added this item
  },
  content: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const taskModel = mongoose.model('Task', Task);

module.exports = taskModel;
