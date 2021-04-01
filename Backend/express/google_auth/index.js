/**
 * this file will show how to use passport.JS and Google OAth2 on the backend
 * docs http://www.passportjs.org/docs/
 */

// require express
const express = require('express');
// for parsing the url params
const bodyParser = require('body-parser')
//for google auth and authentication and importing the passport config
const passport = require('passport')
require('./passportConfig')
// to handle cookie sessions
const cookieSession = require('cookie-session')
// for cross orgin resource policies
const cors = require('cors');
// initialize the express app instance
const app = express();



/********MIDDLEWARES********/
app.use(cors())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// in cookie session docs to configurate a new cookie for the sessior for this user
app.use(cookieSession({
  name: 'OAuth-session',
  keys: ['key1', 'key2']
}))

// custom middleware to determine if user is logged in [receives the users credentials]
const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
}

// must come after the isloggedin middlewares
app.use(passport.initialize());
app.use(passport.session());

/**********ROUTES**********/
app.get('/', (req, res) => {
  res.send('Not logged in')
})
app.get('/failed', (req, res) => {
  res.send('Failed login')
})

// only logged in users can go to /good
app.get('/good', isLoggedIn, (req, res) => {
  res.send(`Welcome, ${req.user.displayName}`) // welcome the user by the users email passed over the query [this explanation is in the docs]
})

// open the google signin form
app.get('/google',
  passport.authenticate('google', {
    //the data in which we want to get access to when a user signs in
    scope: ['profile', 'email']
  }));

// authenticate: if failed, send them to a failed route if no fail, redirect them back to the home page 
app.get('/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/failed'
  }),
  function (req, res) {
    // Successful authentication, redirect home. (for tutorials sake, send to the /good route )
    res.redirect('/good');
  });

app.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  req.redirect('/')
})

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

/**
 * Sessions

In a typical web application, the credentials used to authenticate a user will only be transmitted during the login request. 
If authentication succeeds, a session will be established and maintained via a cookie set in the user's browser.

Each subsequent request will not contain credentials, but rather the unique cookie that identifies the session.
 In order to support login sessions, Passport will serialize and deserialize user instances to and from the session.
 */