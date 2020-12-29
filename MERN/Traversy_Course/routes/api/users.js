const express = require('express');
const bcrypt = require('bcryptjs'); // for hashing
const jwt = require('jsonwebtoken'); // for hashing
const router = express.Router(); // allows us to modularizxe routes into separate files to couple together similar business logic

const User = require('../../models/User');

/**
 * @route   POST /api/users/ <- prefixed in server.js with /api/tasks
 * @desc    Register a new user
 * @access  public
 */
router.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }

    // If valid, check if this user already exists by their emaiil
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Else, the user does not exist so lets encrypt their password and then save this new user
    const encryptedPassword = bcrypt.hashSync(password, 12);
    const newUser = new User({
      name,
      email,
      password: encryptedPassword,
    });
    newUser.save(); // Save the new user

    // generate a JWT and save the users id as the signed payload (the user id will be saved in the token payload)
    // and will make verification/getting data from DB, etc. from that ID super enable_async
    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
      expiresIn: 3600,
    });

    res.json({
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      },
      token,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

/**
 * @route   POST /api/users/ <- prefixed in server.js with /api/tasks
 * @desc    Update an existing user
 * @access  private
 */
router.put('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }

    // Find the user we are updating and update their info
    const user = await User.findOneAndUpdate(
      { email },
      {
        $set: {
          name,
          email,
          password: bcrypt.hashSync(password, 12),
        },
      },
      { new: true },
    );
    // generate a JWT and save the users id as the signed payload (the user id will be saved in the token payload)
    // and will make verification/getting data from DB, etc. from that ID super enable_async
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: 3600,
    });

    res.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
