//global objects in Node and JavaScript

//used to call a function after some delay
setTimeout();
clearTimeout();

//used to run some function at a given interval
setInterval();
clearInterval();

//All the above belong to the window object (Which we know is only used in the DOM)

// window NOT in Node , but global is to allow us to use these methods, however, global is only local to the file they are in

//global.setInterval;

//if we do not make modules, in node the same function names across multile files will always
//be overriden to the most recent call, so, we like to modularize our code and export that code elsewhere to be used
// this is seen in CS351 stuff (also react)
