import jwt from 'jsonwebtoken';
import expressAsyncHandler from 'express-async-handler';

import User from '../models/userModel.js';

// middleware to authorize a route looking for a JWT in the request being sent
// to our backend via the Authorization header
const protect = expressAsyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]; // get just the token NOT 'Bearer' prefix

      // decode the token and get back the payload (the payload for our use case is the mongo users id)
      const decodedUser = jwt.verify(token, process.env.JWT_SECRET);

      // find this user in our database and add them to the request object (as a property called user) so we can parse this info in the actual route when the middleware passes
      req.user = await User.findById(decodedUser.id).select('-password');

      next();
    } catch (error) {
      res.status(401);
      throw new Error('Not authorized. Token failed');
    }
  }

  if (!token) {
    res.status(401); //unauthorized
    throw new Error('Not authorized. No token');
  }
});

export { protect };
