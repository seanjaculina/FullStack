//this file will demonstrate a module

function log(msg) {
  console.log(`Hello from log fn in logger.js : here is the message ->${msg}`);
}

function log_2() {
  console.log("Hello, world");
}

exports.getPerson = function () {
  console.log("ignore this.. this just shows a named export");
};

const name = "Tanner";

//export the log function and name variable - module.exports is an object under the hood so we can use
// dot notation or destructuring naturally when we require in another module
module.exports = { log, log_2, name };

/**
 * If we want to do named exports and not have a 'default' module.exports expression, we can do
 * exports.variable/functionName = the thing to export
 */
