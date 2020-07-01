/**
 * Constructor function : does the same thing as a class in the aspect of being a blueprint for an object, etc
 * but it allows us to condense class code into a smaller code block but the key thing is: it MUST be called as a new instance 
 * using 'new' -> this whole system is just a syntactical sugar for classes.. classes really should be used
 */

// // constructor function of a person
// function Person () {
//   this.age = 24;
//   this.name = 'Tanner';
//   // can also use function keyword as well, of course
//   this.greet = () => {
//     console.log (`My name is ${this.name} and my age is ${this.age}`);
//   };
// }

// // assinging a prototype to the object: a method we can 'inherit/fallback' on in the Person class to use the base class [prototype in this case] code : we literally see that this is the same as using extends
// Person.prototype = {
//   printAge () {
//     console.log (this.age);
//   },
// };

// // new person instance MUST USE NEW , JUST LIKE CLASSES, FOR CONSTRUCTOR FUNCTIONS
// const p1 = new Person ();
// p1.greet ();
// p1.printAge (); // does not exist in the constructor function (or class if using classes) but we assigning a prototype (base class you can say) to our person such that we can fallback on that prototype method
// //console.log (p1); // see the prototype object that exists in this object: this is seen as the base class for all our constructor functions or instance object ever used

//console.log (p1.__proto__); //we can access the proto on our object just like this too

// what we did is whats done manually when we use 'extends'

/**
 * 
 */
// const app = document.querySelector ('.app');

// const h1 = document.createElement ('h1');
// h1.innerText = 'HELLO WORLD';
// app.append (h1);

// lets see how Person shows up as a prototype fallback object on Youngling when we log the youngling object itself
class Person {
  constructor (name, age) {
    this.age = age;
    this.name = name;
  }

  // arrows will always bind to the encasing class
  getIntro = () => {
    console.log (`Name: ${this.name}  Age: ${this.age}`);
  };
}

class Youngling extends Person {
  constructor (name, age) {
    super (name, age);
    this._id = {
      name,
      age,
      social: Math.floor (Math.random () * 100) + 1,
    };
  }

  younglingId = () => {
    console.log (this._id);
  };
}

const y = new Youngling ('tanner', 24);

y.getIntro ();
y.younglingId ();

/**
 * async code: 
 */

function getLoc () {
  return new Promise ((res, rej) => {
    navigator.geolocation.getCurrentPosition (res, rej);
  });
}

function location () {
  getLoc ().then (data => console.log (data));
}

location ();
