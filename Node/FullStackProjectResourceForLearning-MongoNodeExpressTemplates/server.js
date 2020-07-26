// check if in production or developemnt
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config(); // will config our env variables to be put in process
}


// Imports for express API
const express = require('express'); // require express
const app = express(); // create the express app instance
const expressLayouts = require('express-ejs-layouts'); // importing express layouts for ejs -
const mongoose = require('mongoose'); // for connection to our mongodb datastore


// Setting up mongoose for mongodb 
mongoose.connect(`${process.env.DATABASE_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('MongoDB Connected'))

// set ejs as our view engine and layout entry point and view directory
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');


// middlewares
app.use(expressLayouts);
app.use(express.static('public')); // tell express what folder all our static content like html/css/img's etc. will be coming from


// routes in the app : common routes are allowed in separate files and matched suing express router
const articles = require('./routes/articles');

// all routes in articles file will be routed off of /articles since we are using router
app.use('/articles', articles);


// Listen -> Save port and listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));