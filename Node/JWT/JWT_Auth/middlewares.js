const JWT = require('jsonwebtoken')

// exporting in node
exports.authenticateToken = function (req, res, next) {
  // get the token from header
  const authHeader = req.headers['authorization'];

  // get the token
  const token = authHeader && authHeader.split(' ')[1]

  if (token === null) {
    return res.sendStatus(401);
  }

  // else its a valid token, so verify the token 
  JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  })
}

// showing how multiple things can be exported from one module without having to be in a root object or class
exports.name = "tanner bob";