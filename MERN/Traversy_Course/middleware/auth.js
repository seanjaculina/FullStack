const jwt = require('jsonwebtoken');
const User = require('../models/User.js');

const auth = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]; // get just the token NOT 'Bearer' prefix

      // decode the token and get back the payload (the payload for our use case is the mongo users id)
      const decodedUser = jwt.verify(token, process.env.JWT_SECRET);
      // find this user in our database and add them to the request object (as a new property called user) so we can parse this info in the actual route when the middleware passes
      req.user = await User.findById(decodedUser.id).select('-password'); // ignore password since of course we do not want to expose that in the request or responses

      // remember we want to add a user property to the request object if the jwt is verified for an authenticated route
      // such that the route can have acces to the information about that user like the ID, name, email whatever we want to expose

      next();
    } catch (error) {
      res.status(401).json({ msg: 'Not authorized. Token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ msg: 'Not authorized. No token' });
  }
};

module.exports = auth;
