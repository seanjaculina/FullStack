import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';

import users from './data/users.js';
import products from './data/products.js';

import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/OrderModel.js';

import connectDB from './config/db.js';

dotenv.config();
connectDB();

/**
 * NOTE: This is a file simple to automate adding all our sample data from the beginning of this application.
 * It is NOT going to actually do anything for the app when it is all said and done. Adding, editing, deleting DB data will
 * all be done from UI interactions and backend logic!
 */

// will add all our sample data to the DB
const importData = async () => {
  try {
    // to get/delete, etc. many, we can pass {} or nothing at all
    await Order.deleteMany({});
    await Product.deleteMany({});
    await User.deleteMany({});

    // insert all users
    const createdUsers = await User.insertMany(users);

    // get the admin user
    const adminUser = createdUsers[0]._id;

    // products have a relation to a user. So, lets add this user relation
    // via adding a user property and setting it to the adminUser data we got from our users.js
    // we can see the Product model which has a user property which references a user model as its relationship
    // which means we can add this user in to each product and it will map its own id, etc. from the code
    const sampleProducts = products.map((product) => {
      return {
        ...product,
        user: adminUser,
      };
    });

    await Product.insertMany(sampleProducts);
    console.log('Data imported'.green.inverse);
  } catch (err) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

// Will remove all data from the DB
const destroyData = async () => {
  try {
    // to get/delete, etc. many, we can pass {} or nothing at all
    await Order.deleteMany({});
    await Product.deleteMany({});
    await User.deleteMany({});

    console.log('Data Destroyed'.red.inverse);
    process.exit(); // exit the process that is runnin in the terminal
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};

// get the argument from the command line when running this script
// to determine if we used -d to destroy or just the normal script to import
// see the package.json

// gets the third argument in the string in our terminal we write for our command which would be -d or nothing
// we are using npm scripts but behind the scenes when ran, the process arg in the terminal will have the scripts we assigned
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
