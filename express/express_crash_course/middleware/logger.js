const moment = require('moment');   //for data


//lets write middleware: function that can work with req,res and anything in between for server endpoints for the API [everytime a reqwuest is sent, the middleware will run -> for this tutorial, when we send a get request on port 5000 in postman, the request qill run and send a json response of the member data THEN middleware will run as its next invocation]
const logger = (req, res, next) => {
    //output the url that was hit from the request 
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}:${moment().format()}`); //can do anything
    next(); //must call next or the request will be left hanging (next will point to the NEXT MIDDLEWARE) [next() is the callback param above. its not builkt into node or express api. We can name it whatever we like, but, by convention, next() is esiest to understand]
};

module.exports = logger;