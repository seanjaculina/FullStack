const person = {
  name: 'Tanner',
  age: 24,
  greet: function () {
    //Note use of function and not () => the arrow will produce undefined as the scope of that function will be bound to the property greet
    //and not the whole object: this is how ()=> works. It auto binds functions to the scope of the caller, which is greet() and not person
    console.log (`hello, my name is ${this.age} and my age is ${this.age}`);
    console.log (this); //notice how this is bound to the whole object as function() will bind to the context of the object
  },
  // arrow: () => {
  //   console.log (`Hello from the arrow. Name is : ${this}`);
  // },
};

person.greet ();

//we can copy a whole object to a new variable with assign() which has a destination [good for arrays too and objects] and then the data as second
//param. Notice use of spread ... this will destructure out, if you will, all the object data literally to the new object
const p2 = Object.assign ({}, {...person});

//we can of course assign new values to the properties
p2.name = 'Hayden';
p2.age = 22;
console.log (p2);
// delete p2.greet;
// console.log (p2);  //proof

/**
 * Null vs undefined
 * 
 * null === for reassignment and changing things, like nodes in a LL 
 * undefined === something that just has no purpose, etc [means its there, but does not matter, etc.]
 * delete will delete a whole object in memory and its reference (when i say object, i mean any object in javascript: types, object, array, etc)
 */
