import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false, // default they are not an admin
    },
  },
  {
    timestamps: true,
  },
);

// creating a method for our schema: this method does our password match / comparison to
// see if the user we found exists
userSchema.methods.matchPassword = async function (enteredPasswords) {
  // Compare the entered password with the hashed password in the model for this user
  return bcrypt.compareSync(enteredPasswords, this.password);
};

// Middleware to run pre-usersave and encrypt the password user entered and do the save for us
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  // encrypt the password the user entered
  this.password = await bcrypt.hash(this.password, await bcrypt.genSalt(10));
});

// create a new model - this will take the schema (design of our data) and model it out in our DB as a collection
// which will represent a collection of users in our DB
const User = mongoose.model('User', userSchema);
export default User;

/**
 * The process of making a schema and then making a mongoose.model from it is called
 * 'modeling our data' where we basically design what it is to be certain things that should be
 * saved in our database like a user, like a product, like an order, etc. and we design the fields for those
 * models, requirements, etc. and this design is an object called a schema. The schema designs the model of the data
 * and then to make a new collection in our DB using that schema, we make a model from that schema
 * using the mongoose.schema method and name it and pass it the schema and when you go to save some data
 * from these models later, or look in the DB after the app restarts, the collections should be ther! Cool
 */
