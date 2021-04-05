const mongoose = require('mongoose');

// Will create a new movie collection
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  image_url: {
    type: String,
  },
  info_url: {
    type: String,
  },
});

module.exports = Movie = mongoose.model('Movie', movieSchema);
