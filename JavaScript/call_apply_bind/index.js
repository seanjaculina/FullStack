let obj = {
  num: 2,
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
//collection or list as the second argument now, and it will use each value as the corresponding value in our function to add with

let addThis = function (a, b, c) {
  return this.num + a + b + c;
};

//the arrays 3 values will refer to a + b + s when we apply the collection as an arg

const arr = [1, 2, 3];
console.log (addThis.apply (obj, arr)); //output: 8
