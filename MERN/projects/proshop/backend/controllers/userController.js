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
  if (user && (await user.matchPassword(password))) {
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
 * @desc    Get user profile
 * @route   GET /api/users/profile
 * @access  private
 */
const getUserProfile = asyncHandler(async (req, res) => {
  // we used our middleware to parse the headers of this incoming request for a Bearer auth token. If it passed,
  // as we know from 351/651 we need to then attach a user property to the request object
  // which will contain the data of the user (which in our case we made the payload of the JWT being decoded only be the ID of the user in mongoDB)
  // and of course, since the middleware works, we know that req.user._id below will always work since we can never get to this point if the middleare ever failed!

  /**
   * So the flow is, authenticate, generate a token and then on private routes we need to make sure they are protected by an auth middleware. For this case, we use JWT for our auth, so
   * we parse the authorization header in the request object, and if it has 'Bearer and some data' we can use jwt.verify(token, secret) to verify the token that
   * was sent in the headers and when it passes, we assign a new object to req called req.user = await User.findById(the verified token we saved which should contain the payload of that token which is an ID which is why we are using findById)
   * and we can then have all the users data includng their _id in the user object thats now in request!
   *
   * So now here in the actual route, we can await finding the user by the user._id which only existed because JWT.verify passed.
   *
   * So we authenticate, generate token there, build middleware to check for auth, put that middleware on the protected routes like this one (always for ./profile)
   * and if it passes we can send back all that user data as json to react client else the middleware failed and had returned its own errors
   */
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

export { authUser, getUserProfile };
