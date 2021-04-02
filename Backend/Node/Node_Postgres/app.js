const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
require('dotenv').config();

const db = require('./config/database');

// Init express app
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// template engine - using server-rendered app here. No client side JS / React
app.engine(
  'hbs',
  exphbs({
    defaultLayout: 'main.hbs', // the default html layout for every page which can then have custom html for each view injected in
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  }),
);
app.set('view engine', 'hbs'); // set the view engine to handlebars
app.use(express.static(path.join(__dirname, 'public'))); // set static assets folder - public folder holds all static assets

// Connect to the database
(async function connect() {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

// Home page route - server rendered home page
app.get('/', (req, res) => res.render('index', { layout: 'landing.hbs' }));

// routes - like blueprints in flask - applies modularity to the routes in a server
app.use('/gigs', require('./routes/gigs'));

// Listen for requests on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
