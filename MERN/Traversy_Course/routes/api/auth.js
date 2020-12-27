const express = require('express');
const bcrypt = require('bcryptjs'); // for hashing
const jwt = require('jsonwebtoken'); // for hashing
const auth = require('../../middleware/auth');
const router = express.Router(); // allows us to modularizxe routes into separate files to couple together similar business logic

const User = require('../../models/User');

/**
 * @route   POST /api/auth
 * @desc    Login a user
 * @access  public
 */
router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }

    // If valid, check if this user already exists by their email
    const userExists = await User.findOne({ email });
    if (!userExists) {
      return res.status(400).json({ msg: 'User does not exist' });
    }

    // Else, the user exists but we need to compare the entered PW with the hashed PW in the database for this user
    const isValid = await bcrypt.compare(password, userExists.password);

    // If the passwords are invalid, send backa  message
    if (!isValid) {
      return res.status(400).json({ msg: 'Invalid password' });
    }

    // else, it was correct, set a jwt of this signed in user and send that data as a response just like registering
    const token = jwt.sign({ id: userExists.id }, process.env.JWT_SECRET, {
      expiresIn: 3600,
    });

    res.json({
      user: {
        id: userExists.id,
        name: userExists.name,
        email: userExists.email,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ msg: 'Something went wrong' });
  }
});

/**
 * @route   GET /api/auth/user
 * @desc    Get user profile data
 * @access  private
 */
router.get('/user', auth, async (req, res) => {
  // get the user attached to this request (remember the middleware adds the authenticated user to the headers if they had a valid JWT)
  // Look in the DB for this user (remember, use user property contains a property called id)
  const userData = await User.findById(req.user.id).select('-password');
  res.json(userData);
});

/**
 * @route   POST /api/auth/user
 * @desc    Update user profile data
 * @access  private
 */
// router.post('/user', auth, async (req, res) => {
//const { name, email, password } = req.body;
// });

module.exports = router;
