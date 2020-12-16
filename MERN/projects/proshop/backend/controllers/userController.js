import asyncHandler from 'express-async-handler'; // see this package on NPM. It does all the TRY/CATCH exception handling for us

// generate token util to make a JWT token
import generateToken from '../utils/generateToken.js';

import User from '../models/userModel.js';

/**
 * @desc    Auth user & get token
 * @route   POST /api/users/login
 * @access  public
 */
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Find this user by the email address
  const user = await User.findOne({ email });

  // If they exist, validate that password entered (of course, we need to compare it with the hashed PW: we are using function we put in our user model to do this!)
  if (user && user.matchPassword(password)) {
    return res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

/**
 * @desc    Register a new user
 * @route   POST /api/users/login
 * @access  public
 */
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Find this user by the email address
  const userExists = await User.findOne({ email });

  // Check if the user already exists in the database
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // if not, encrypt the password and then save the user to the database

  const user = await User.create({
    name,
    email,
    password, // this is encrypted for us in custom mongoose middleware we wrote (no need to do the encrypt step before like we know)
  });

  // no need to save as the custom mongoose middleware does it automatically

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid User Data');
  }
});

/**
 * @desc    Get specific users profile
 * @route   GET /api/users/profile
 * @access  private
 */
const getUserProfile = asyncHandler(async (req, res) => {
  // Find the user by the user._ID attached to the user property of the request object
  // that was attached via the authMiddleware middleware we added to this route.

  const user = await User.findById(req.user._id);

  // We still want to make extra sure our logic works even though we can assume it does. So still just
  // make sure the user was defined
  if (user) {
    return res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error('User not found');
  }
});

// these controllers (routes) will be exported and put into userRoutes
// for routing and then those are exported to the server.js file and used as middleware. Cool architecture
export { authUser, registerUser, getUserProfile };
