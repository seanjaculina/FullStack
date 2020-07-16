/**
 * Lets first explore ES6 classes and correlate them to how classes and OOP work in general for most languages
 */

class Person {

  // constructor for this class
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // get a persons name and age
  getPerson = () => console.log('Person info: ' + this.name + ' ' + this.age);
}

// we can then make a new instance of this class and display the users information
const User = new Person('Tanner', 24);
User.getPerson(); // Tanner 24

// what about if we want to add a new method to the class? Of course we could add a method normally by hard coding it into the class itself but what if an interviewer
// said we cannot or more realistically, we did not have access to the class for our code base restrictions on the job? In this case, we would want to use prototypes

/**
 * A prototype is nothing more than a property in all objects in JS that holds an object of different fallback methods and extended (inherited) methods from some parents
 * prototype for that object: e.g) when we make an array let a = [1,2,3] we in reality just made a new object in memory. When we want to print it as a string, we probably have seen
 * console.log(a.toString()) but we never built that logic? How the heck does a have access to that? Well, simple! Through prototypal inheritance.. that is, Object has a prototype object
 * that holds methods, one of which called toString() that can be extended to any object in JS and converts it to a string (the implementation is encapsulated from us in the JS API)
 * but that is how we get access! Our array object has a prototype property that is nothing more than an object that contains both built in methods/props to use on that array
 * 
 * One key thing on top of only being allowed function definitions(no arrows): In classes, you can only add functions to the prottotype! Nothing more.
 * In constructor functio approach, you can many different things
 * 
 * 
 * 
 * So, with this explanation out of the way, how can we bnasically call a function on our Person, for example getName() but the class does not have that? We can make a prototype for this 
 * person object to fallback on in order to 'inherit' and use! Amazing
 * 
 * see this link to understand hoisting, lexical scope and closures: https://medium.com/@nickbalestra/javascripts-lexical-scope-hoisting-and-closures-without-mystery-c2324681d4be
 * 
 * we cannot use arrows because we lose access to lexical 'this' as arrows need not to worry about context, and will automatically bind to the calling object
 * therefore, using arrows will actuall he applied to the prototype and not the object we wanted to call it on! Read book and also read docs on this
 * 
 * Lets see the code
 */

Person.prototype.getName = function () {
  return this.name;
}

Person.prototype.getAge = function () {
  return this.age;
}

// this function will now be bound to every new isntance of person thuis having the correct context of this!

let Tanner = new Person('Tanner', 24)
console.log(Tanner.getName()) // yay! It works
Tanner.getPerson();
console.log(Tanner.getAge())

// we can prove that the Person object contains at least one prototype that is a function
console.log(Object.getPrototypeOf(Person) == Function.prototype)

// to prove the prototype exists: copy this code into the browser and then run console.dir(Person) and look for the 'protoype' property and you will see getName is there!



/**
 * This is all fine and dandy but a lot of legacy code, and code now even uses pre es6 classes , so, we would then be using what we call 'constructor functions'
 * 
 * Lets see a full implementation of this and protypal inheritance for that route
 */

// this will highlight to say 'convert to 3s6 class (or soemthing along those words)' but this is pre es6 constructor function which is essentially how we used to write classes
function Square(x, y) {
  this.x = x;
  this.y = y;
}

// we are adding fallback extendability to the constructor function
Square.prototype.getDimmensions = function () {
  return this.x + this.y;
}

const sq = new Square(10, 20);
console.log(sq.getDimmensions()) // proof that the new getDimmensions method exists

// so we can see the power here and how this might even be handy when doing interviews or fast scripts that you may not want to write class, consturctor etc. all out
// and instead just use pre es6

// be carefrul though, this all wors fine, but the second you use this type of functionality in a object literal, you will lose context to 'this'