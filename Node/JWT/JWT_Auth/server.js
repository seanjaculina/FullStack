const express = require('express');
const app = express();

// config the .env
require('dotenv').config();

//jwt
const JWT = require('jsonwebtoken');

// data imports : destructure out the names exports
const {
  posts
} = require('./posts');

const auth = require('./middlewares')
console.log(auth)

//middlewares: destructure them out as we want to cherrypick the specific functions from this module
const {
  authenticateUser
} = require('./middlewares');

//const auth = require('./middlewares');


// middlewares
app.use(express.json());
console.log(posts)

/**
 * @route   /
 * @param   none
 * @access  public
 */
app.get('/', (req, res) => {
  res.send(posts);
})


app.get('/posts', authenticateUser, (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name))
})


app.post('/login', (req, res) => {
  // authenticateUser user at this step 
  // some code.....

  const username = req.body.username;

  const user = {
    name: username,
  }

  // get the secret key from the .env
  const SECRET = process.env.ACCESS_TOKEN_SECRET;


  // create the JWT with the user, token and expiration
  const token = JWT.sign(user, SECRET);

  // we can then return the JWT
  res.json({
    accessToken: token
  })

})




const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server listening on port: ${PORT}`))