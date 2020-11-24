import mongoose from 'mongoose';

// connection config function to modularize our code a bit - this is a common design paradigm for clean code
export default async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`.bgBlue.white);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};
