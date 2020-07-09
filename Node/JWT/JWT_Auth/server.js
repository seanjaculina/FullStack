const express = require('express');
const app = express();

// config the .env
require('dotenv').config();

// data imports : destructure out the names exports
const {
  posts
} = require('./posts');

// middleware function imports
const {
  authenticateToken,
  name //practice with imports..ignore for actual tutorial logic and purposes
} = require('./middlewares');


// import jwt creation function
const {
  generateToken
} = require('./generateToken');

console.log(name)

// middlewares
app.use(express.json());
console.log(posts)


app.get('/', (req, res) => {
  res.send(posts);
})

// will take in the token in request and authenticate the token and then find the user based off their username which is used for the sign in and then return their data from the posts 'database'
app.get('/posts', authenticateToken, (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name))
})


app.post('/login', (req, res) => {
  // authenticateUser user at this step 
  // some code.....

  // get the username from the request
  const username = req.body.username;

  // put the user into an object and pass it to the generate token method
  const user = {
    name: username,
  }

  // generate the token : logic extracted to its own module
  const token = generateToken(user);

  // we can then return the JWT
  res.json({
    accessToken: token
  })

})




const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server listening on port: ${PORT}`))