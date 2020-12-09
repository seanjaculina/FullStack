import jwt from 'jsonwebtoken';

// this utility is responsible for generating a JWT for a user from their User id
// this paradigm of putting this type of thing in a file in a folder called utils is very useful
// and common

// Takes in the users id (from mongoDB) to put in the payload for the jwt (the id of a user of course can be used
// to look in the DB and get all their data. When we verify the token in the authMiddleware, and it passes, we would then be able to take that returned object from verify
// and look the user up by the id we are passing in for the payload here in {id})
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

export default generateToken;
