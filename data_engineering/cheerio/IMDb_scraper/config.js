const mongoose = require('mongoose');

const connectDB = () => {
  mongoose.connect(
    process.env.MONGO_DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
    () => console.log('Connected to DB'),
  );
};

module.exports = connectDB;
