const express = require('express'); // require express
const app = express(); // create the express app instance
const expressLayouts = require('express-ejs-layouts'); // importing express layouts for ejs -


// set ejs as our view engine -> no need for this if using react as a client side view
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); // sets the views folder in our project to be the source for express to render views from
app.set('layout', 'layouts/layout');

// middlewares
app.use(expressLayouts);
app.use(express.static('public')); // tell express what folder all our static content like html/css/img's etc. will be coming from


// Test route
app.get('/', (req, res) => {
  res.send('<h1>Hello!</h1>')
})





// Listen -> Save port and listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));