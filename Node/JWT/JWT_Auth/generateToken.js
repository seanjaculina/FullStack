const JWT = require('jsonwebtoken');

const generateToken = user => {
  const SECRET = process.env.ACCESS_TOKEN_SECRET;
  // create the JWT
  return JWT.sign(user, SECRET, {
    expiresIn: 3600
  });
}

module.exports = generateToken;
// this function handles creating json web tokens
// extracted here to make it reusable and extracted from the main server logic