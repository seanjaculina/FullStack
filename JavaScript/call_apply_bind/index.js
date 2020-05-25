let obj = {
  num: 2,
};

let obj2 = {
  num: 5,
};

//has to explicetely be an es5- function
// let addThis = function (a) {
//   return this.num + a; //as we can see, this refers to nothing with num in this function.. num is a property of obj! So, to use this, we can use call()
// };

//CALL() will call the function on a specified object and invoke that function affecting soemthing
//in that objects properties we can refer to with 'this' in our function: see example above

//call() takes in the object to invoke this function on and then the argument expected from the function we made
//no this.num + a will be able to work! Because we called this medthod on OBJ, therefore we have access to all the objects local state with 'this'
//console.log (addThis.call (obj, 10)); //the argument passed will be added to 'this.num' where this refers to the objects property num we are calling this on! this always refers to the current onbject

//APPLY() for appling functions to objects and taking x amount of values to apply the fucntion to on the prop itself

//we can also apply N arguments to an object to call that function on: we pass the
//array as the second argument now, and it will use each value as the corresponding value in our function to add with

let addThis = function (a, b, c) {
  return this.num + a + b + c;
};

//the arrays 3 values will refer to a + b + s when we apply the collection as an arg

const arr = [1, 2, 3];
console.log (addThis.apply (obj, arr)); //output: 8
console.log (addThis.apply (obj2, arr)); // 11 -> we can use apply to multiple objects with miultiple calls of course

/************************************************************************* */

//BIND(objtobindto)
//bind will attach the function as a method of that object. it returns a function with the new object. it does not call the function!
//it just lets us use it at another time. we can simply call that function when needed, and it will refer to 'this' context
//of the class/object it resides in

const bound = addThis.bind (obj); //addthis is now bound to the obj and we can call it passing the x amount of arguments add this requires
//this is similar to the events in react! we need to bind thos emethods to 'this' in the class so it can access all the properties of that instance
console.log (bound (1, 2, 3)); // this.num = 2 as we know in the object, we then bind addThis to the object. we can then call that bound (the returned function from bind) with the arguments and change the state of the oibjecr we bound to
