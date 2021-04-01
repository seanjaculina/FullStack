const express = require('express'); //bring in express
const path = require('path'); //file handling
const exphbs = require('express-handlebars');   //handle bars is a template engine
const logger = require('./middleware/logger');
const members = require('./members');   //data 


const app = express(); //create an app


//handlebars middleware: in documentation : needed right after app
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');



//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));   //from line 46 of members


//route to serve our template for handlebars: this is different from our crd API! what we did up till this template stuff
//was crud backend stuff youd use for connecting to front end with state, views etc! But, express allows us to also serve templates
//and generate them! This is really cool, so this is independent of our other routes,e tc.
app.get('/', (req, res) => {
    //render the members data and anything else
    res.render('index', {
        title: 'Member App',
        members
    });    //render the index view file! Simple
})




//init middleware: used for showing sepcific data for req or res -> see middleware folder
//app.use(logger)

//npm install -D nodemon to have live reload of the server [to use it go to package.json and create a script (go see for self)]

//go to routes in api folder to see how routes (get/post, etc. requests are handled)

//set static folder as a whole entry point of html to serve out
//app.use(express.static(path.join(__dirname, 'public')));

//members api routes from api -> Members [use the routes from this file is basically what this is saying]
app.use('/api/members', require('./routes/api/Members'));


//grab the port from environment vars or deploy to 5000 (for dev server)
const PORT = process.env.PORT || 5000;

//Starts the HTTP server listening for connections [must use at end of file]
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

//cntrl c to quit server, node jsFile to runit

//to use nodemon live rerload, type 'npm run dev' in the command line and hot reload is loaded [now nodemon is running and hot reload works]



/*
NOTE:

We typically do not want to serve out html files or styling. We usually will build out json API to serve responses to forms, click events etc. from the front end OR templates like handlebars or pug, etc.

*/
