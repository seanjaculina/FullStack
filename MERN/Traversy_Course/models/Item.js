const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema object
const Item = new Schema({
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

module.exports = ItemSchema = mongoose.model('Item', Item);
