//this file will demonstrate a module

const URL = 'http://mylogger.io/log';

function log (msg) {
  //send an http request to the endpoint above
  console.log(msg);
}

function log_2 () {
  console.log('Hello, world');
}

//export this function to be used anywhere in the Module object:
//exports is a propert of the module object, that contains an object of functions in this
//module, thus, we must export.log = log; that way using common OOP, we can access the log key in the exports property
//of the module object and specifically set it to the log function
module.exports = log;

//show the module object fields to show tht exports is an object of specified exports (by us) we are exporting
//console.log(module)