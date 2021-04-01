// const logger = require("./logger"); //importing the logger module [this variable 'logger' is now a variable that represents any exported values from logger as module.exports is an object itself!]

// logger.log("hello");
// console.log(logger.name);

// // show logger really is just an object
// console.log(typeof logger);

// the above is fine but typically when we export multiple things from a module, we want to use those individually
// and as the required thing we bring in is an object we can destrucutre all the properties!

const { log, name } = require("./logger");

log("tanner");
console.log(name);

//will show current dir and filename using node
// console.log(__dirname);
// console.log(__filename);

//node is a JS runtime that is async and non-blocking and can run right in your console
//it runs on v8 engine and is built in C++ (See notes made before)

//DOM and Window objects are browser specific! Cannot be used in Node.js applications
//console.log(window);
