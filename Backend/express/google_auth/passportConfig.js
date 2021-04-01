/**
 * see docs @ http://www.passportjs.org/packages/passport-google-oauth20/
 */

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

//////////////////////////////////////////////////////
// see docs: this will serialize the users session
passport.serializeUser(function (user, done) {
  // this function will be called from session and slim down the cookie by the users id and then pass them off to done(null, the id)
  // for now since we do not have a db for this tutorial i am just passing the whole user always
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  // and then here is where you'd look in the db for the user by their id when a cookie is generated for them on an auth route,
  // and then select the user [usually pass the users.id down but no db here] and then the callback url in the index file of /callback will be hit and then redirect them to the failed route for an error or the home page that successfully let them in
  done(null, user);
});
/////////////////////////////////////////////////////




/////////////////////////////////////////////////////
// define a new strategy: strategy is for authenticating users
passport.use(new GoogleStrategy({
    /*From google dev console*/
    clientID: '75547473706-hc9ainuj2r4uvcl0n5j0asmj90t2fv5q.apps.googleusercontent.com',
    clientSecret: 't1gKpGwJhyhsmbFoMrsJ6kp5',
    callbackURL: 'http://localhost:3000/google/callback'
  },
  function (accessToken, refreshToken, profile, done) {
    // use profile , mainly profile ID to check if user is in the DB -> use mongodb findOrCreate or whatever , and that logic to find the user or create them 
    // and then send the user off to the serialize methods from passport [ i deleted the sample code which is in the docs: the docs for this will show what i mean on searching the db]
    return done(null, profile);
  }
));
/////////////////////////////////////////////////////

/**
 * google credentials step
 * 
 * 1) go to dev console and create a new project
 * 2) select create credentials > OAuth ID 
 * 3) put the redirect uri's in : in this apps case, it is callback url here in passport use() method which is just the localhost (will need to change to host of any users address??)
 * 4) get the client id and client secret and toss into an .env file and use it
 */