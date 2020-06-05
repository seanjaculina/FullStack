/**
 * This file will demonstrate call, apply and bind
 * 
 * 
 * the idea is that when using objects or functions, the code inside is bound to the object itself. So, we can reference anythiung inside
 * with this keyword. However, when you want to use the data outside, by default its local to that object and cannot be referenced. 
 * 
 * In order to get around this, we have call, apply and bind methods in which we can actually bind code outside the context of those object 
 * to that object and bind call or apply a different scope function, etc. to
 * 
 */

const ob = {
  name: 'tanner',
  age: 24,
  dob: '12/04/1995',
  func: function () {
    return this.name + ' ' + this.age;
  },
};

console.log (ob.func ()); //this works fine, hwoever, if we wanted to access the properties of the object as a way to extend functionality
//of a function we make outside that object, we know we cannot access the data with 'this' . these three call,apply and bidn methods solve this

const displayUser = function () {
  console.log (this.func () + " is tanner's info");
};
//notice the error: we are trying to use 'this' on a non bound function to that context. lets go ahead and change that
//displayUser ();

//we can save the bound function signature to a variable, and then call that variable and voila!
const user = displayUser.bind (ob);

//now what?
user ();

//call and apply are basically the same only only call allows the function we are referencing this to, to take in x amount of args
//and must take thos params after the object and apply is exactly the same, only the params must be in the form of an array

var pokemon = {
  firstname: 'Pika',
  lastname: 'Chu ',
  getPokeName: function () {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  },
};

var pokemonName = function (snack, hobby) {
  console.log (this.getPokeName () + ' loves ' + snack + ' and ' + hobby);
};

pokemonName.call (pokemon, 'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
pokemonName.apply (pokemon, ['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms
