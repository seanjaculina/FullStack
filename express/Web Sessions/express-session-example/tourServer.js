const express = require('express');
let app = express(); // Can't use const if exporting
const session = require('express-session');
const bcrypt = require('bcryptjs');

app.use(express.json());

const cookieName = 'TourSid'; // Session ID cookie name, use this to delete cookies too.

// Establishes a new session instance
const sessionObj = session({
  secret: 'website development CSUEB',
  resave: false,
  saveUninitialized: false,
  name: cookieName, // Sets the name of the cookie used by the session middleware
});

// Adds the session to the request object and uses the middleware session above
app.use(sessionObj);

// Fake user and tour data
const users = require('./secUsers.json');
const tours = require('./tours.json');

// This initializes session state
function setUpSessionMiddleware(req, res, next) {
  console.log(`\nsession object: ${JSON.stringify(req.session)}`);
  console.log(`session id: ${req.session.id}`);
  if (!req.session.user) {
    req.session.user = { role: 'guest' };
    // attaches a property called "user" which stores an object about a user in Memory
    // this property is attached to the session object which is given to the req object when using express session middleware!
    // Once we use this (line 7-12), as we know with middleware, every request to this server will see that middleware and run. In this case, the
    // initial request will have no logged in user which means we run that session middleware, generate a session for this visitor with
    // a unique ID (only the ID is saved in cookie via this module! Cool!). The function above on Line 20 shows us the
    // initial middleware for checking if a user does not exist yet for this new session (the user is stored in the session store with .user)
    // but only the iD is set in the cookie. THat cookie is parsed behind the scenes wioth this npm module and will allow us to just see the user and
    // do something with it with that session.

    // Notice when this middleware runs, the output of lines 25 nd 26 show the session onkect which has all our config
    // and then the session ID which is what is sent back in the response as a cookie witht the ID (run this file and see the cookies in the browser)

    // Initially there will be no user property on the session object so we set it and give the access to this user as a role of guest (this will be updated if they register / sign up)
  }
  next();
}

app.use(setUpSessionMiddleware);

// Use this middleware to restrict paths to only logged in users
function checkCustomerMiddleware(req, res, next) {
  if (req.session.user.role === 'guest') {
    // If the user property which exists in our session object which is identified by the session ID in the cookie still
    // has a role property of guest, they never logged in so the user should not be given access to a "page" / data with a user provelege /
    // and they should be not permitted and then rediredted (if using rewact, history.push('/login') to login
    // else, the req.session.user.role had an admin or user value so we fall through to the next middleware which would just be the route we protected
    res.status(401).json({ error: 'Not permitted' });
  } else {
    //		console.log(`\nSession info: ${JSON.stringify(req.session)} \n`);
    next();
  }
}

// User this middlewave to restrict paths only to admins (same idea as notes above only for an admin role and not user / guest)
function checkAdminMiddleware(req, res, next) {
  if (req.session.user.role !== 'admin') {
    res.status(401).json({ error: 'Not permitted' });
  } else {
    next();
  }
}

// Available to all visitors
app.get('/tours', function (req, res) {
  res.json(tours.virtTours);
});

// Only available to admin, returns updated tour list.
app.post('/addTour', checkAdminMiddleware, express.json(), function (req, res) {
  let temp = req.body;
  //	console.log(temp);
  // Note need to check input here to prevent injection attacks
  let event = {
    name: temp.name,
    date: temp.date,
  };
  tours.virtTours.push(event);
  res.json(tours.virtTours);
});

// Available to all visitors, returns user info if successful
app.post('/login', function (req, res) {
  //	console.log(req.body);
  let email = req.body.email;
  let password = req.body.password;
  // Find user
  let auser = users.find(function (user) {
    return user.email === email;
  });
  if (!auser) {
    // Not found
    res.status(401).json({ error: true, message: 'User/Password error' });
    return;
  }
  let verified = bcrypt.compareSync(password, auser.passHash);
  if (verified) {
    // Upgrade in priveledge, should generate new session id
    // Save old session information if any, create a new session
    let oldInfo = req.session.user;
    req.session.regenerate(function (err) {
      if (err) {
        console.log(err);
      }
      let newUserInfo = Object.assign(oldInfo, auser);
      delete newUserInfo.passHash;
      req.session.user = newUserInfo;
      res.json(newUserInfo);
    });
  } else {
    res.status(401).json({ error: true, message: 'User/Password error' });
  }
});

app.get('/logout', function (req, res) {
  req.session.destroy(function (err) {
    if (err) {
      console.log(err);
    }
    res.clearCookie(cookieName, req.session.cookie); // the cookie name and the cookie itself
    res.json({ message: 'Goodbye' });
  });
});

module.exports = app;

/**
 * express-session by default uses an in-memory store for the session state for users, etc.
 * this is not scalable! Consider using cassandra or redis (preferred)
 */
