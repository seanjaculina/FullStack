function sayHello () {
  console.log('hello, there');
}

sayHello();

//DOM and Window onjects are browser specific! Cannot be used in Node.js applications
//console.log(window);

//use the log module: specifically taking out the log method
const logger = require('./logger'); //importing the module which contains log metthod
console.log(logger);  //should show log : [function] which is the log function we exported
logger('hello')


//will show current dir and filename using node
console.log(__dirname);
console.log(__filename);

//node is a JS runtime that is async and non-blocking and can run right in your console
//it runs on v8 engine and is built in C++ (See notes made before)