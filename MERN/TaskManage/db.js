const mongoose = require('mongoose');

const dbConnect = (URI) => {
  mongoose.connect(
    URI,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('MongoDB connection established'.bgGreen.white);
      }
    },
  );
};

module.exports = dbConnect;
