const express = require('express'); // require express
const app = express(); // create the express app instance
const expressLayouts = require('express-ejs-layouts'); // importing express layouts for ejs -


// set ejs as our view engine and layout entry point and view directory
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
// middlewares
app.use(expressLayouts);
app.use(express.static('public')); // tell express what folder all our static content like html/css/img's etc. will be coming from


// routes in the app : common routes are allowed in separate files and matched suing express router
const indexRouter = require('./routes/index');

// set up the route handlers
app.use('/', indexRouter);


// Listen -> Save port and listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));