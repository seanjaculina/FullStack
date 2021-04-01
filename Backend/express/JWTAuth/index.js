const express = require('express');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');

// invoke express and save to app variable
const app = express();

// Middlewares
app.use(morgan('combined')); // logger
app.use(express.json());

/**
 * This small project shows how to protext routes in an API for only allowing authneticated 
 * users to go to. In the login step, we send the token back to the client
 * to see that it exists but in a real app with React, etc. we would actually want to get this token from the fetch
 * and then save it to local storage, or a cookie to open a new session. Then in every subsequent request, the request body would contain
 * that token which means that for any route that is protected, the request will have the token attached and our middleware would parse it and 
 * confirm it is valid
 */

// test route
app.get('/', (req,res) => {
  res.status(200).json({
    msg: 'hello world!'
  });
});

// protected route - requires a JWT to hit (so we use the custom jwt validation middleware we wrote)
// if the jwt is passed, we will basically verify it against the required secret
// and then send a response with a message and users data, etc.
app.post('/api/posts', verifyToken, (req,res) => {

  // verify the token being input
  jwt.verify(req.token, 'SECRET_KEY', (err, authData) => {
    //auth data will have username, id and email entered
    // if no error, send back the data and all the auth data that is in the token being passed into this route (just to show that this is a user that can get to this endpoint )
    if(!err) {
      res.status(200).json({
        msg: 'Post Created',
        data: authData
      });
    }else{
      res.sendStatus(403);
    }
  })
});

// protected route - requires a JWT to hit
app.post('/api/login', (req,res) => {

  // Mock user : in reality , we would get the req.body stuff, authenticate the password with bcrypt versus the pwd in Db and if all else is good
  // we end up at the code below
  const user = {
    id: 1,
    username: 'Tanner',
    email: 'tanner@ex.com'
  }

  // generate a JWT for the user that just logged in [see docs]
  // takes in a payload (users login info) secret key (should be in an .env) , options and then a callback to do some other stuff - in our case we send a res
  jwt.sign({user}, 'SECRET_KEY', {expiresIn: '30s'},(err, token) => {
    res.json({
      token
    })
  })
});

// FORMAT OF HEADER of a request that that sends a jwt
// Authorization: Bearer <Access_token>

// verify token middleware - will verify all protected routes that a jwt is being sent in the request to the specific REST endpoint
function verifyToken(req,res,next) {
  // Get the auth header value (sent in the header of POST req)
  const bearerHeader = req.headers['authorization']; // get the auth header in the request (headers are in an object whihc is why we are 'indexing')

  // Check if the bearer is undefined
  if(bearerHeader) {
    // Get the token only and not the string part saying 'Bearer' see line 46 for the auth header token design
    // and add a property to the request object named 'token' to be passed along in the incoming request
    req.token = bearerHeader.split(' ')[1];
    next();
  }else{
    // Forbidden attempt to this route - JWT was not defined, so, redirect and put an 403 status
    res.sendStatus(403)
  }
} 

const PORT  = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server listening on port ${PORT}`))