console.log('hello')

const a = 'hi';

const display = function (msg) {
  return msg;
}

console.log(display(a));

const res = function (x) {
  console.log(x + 2);
}(10);  // <- passes some argument and calls it just like this  //will show 12 in the console. this is cool


//another cool one: assigning default values to params with the assumption a user MAY forget/not use a value in a param
const mult = function (x = 1, y = 1) {
  console.log(x * y);
}(10, 2) // shows 20, however if we remove 10, it will return 2. If we remove 2, it returns 10. if we do no params, it returns 1! super cool

let arr = [10, 20, 30, 40, 50];
console.log(`Values: ${arr}`);

//sum the values of an array usign reduce which returns the accumlation of some params in the array (count is our counter and curr_val here is the current value we are looking at in the array)
const sum = arr.reduce((count, curr_val) => {
  return count + curr_val;
})
console.log(sum);


//object deconstruction
const lis = {
  name: 'Tanner',
  age: 24,
  dob: '12/04/1995'
};

//deconstruction of the lis object: we literally write what we want from the object (or files using require() etc.)
const { name, age, dob } = lis;
console.log(name + ' ' + age + ' ' + dob);  //and we can simply use the properties as variables. super cool

//from a file:  const {getName} = require('app.js); for example

//higher order method: filter() used to filter a collection off args. in this example, filter out all non single char array indices
let strings = ['abc', 'a', 'aaa', 'c', 'd', 'f', 'zz']
const chars = strings.filter(str => {
  return str.length <= 1
})
console.log(chars.toString()); //should show a,c,d,f in stirng an not object {array}



//function as properties
const user = {
  user_name: "tanner barcelos",
  id_: "abcdef",
  displayUser: function () {
    console.log(`Users name: ${this.user_name}`); //using variables inside methods as props in es6 objects must use this binding! because we refer to 'this' objects context [so this user in this case]
  }
}

//and we can call it simply by calling the key property and it then invokes the value (function)
user.displayUser();




//////////////////////////////////////////////
/**
 * IMPORTANT TOPIC: Constructor/classes in ES6
 *
 * old javascript:
 *
 * //we would show the developers this reflects an object by using the common practice of capitalized class names
 * //constructor function
 * function Person(name, age, hairColor){
 *    this.name = name;
 *    this.age = age;
 *    this.hairColor = hairColor;
 * }
 *
 * //defining a new person
 * const Tanner = new Person("Tanner",24,"brown");
 * clg(Tanner) ==> {name: 'Tanner, age: 24, hairColor: 'brown'};
 *
 *  //writing a function for this person object to access 'this'
 *  Person.prototype.sayName = function(){
 *  clg(this.name);
 * }
 *
 *
 * //what about making a new constructor function [class] that inherits from a person to be more specific?
 * function Male(gender, occupation, name, age, hairColor){
 *    Person.call(this,name,age,hairColor);
 *    this.gender = gender;
 *    this.occupation = occupation;
 * }
 *
 * const Tanner = new Male('M', 'Software Engineer', 'Tanner Barcelos', 24. 'brown');
 * then do whatver
 *
 *
 * this is way too much. see ES6 way below!
 *
 */

//we can do all that using classes
class Person {
  constructor(name, age, hairColor) {
    this.name = name;
    this.age = age;
    this.hairColor = hairColor;
  }
  sayName () {
    console.log(`Person name: ${this.name}`);
  }
}

//inheritacne: no longer uses BaseFunctionConstructor.call?() but simply uses super() simply passing all inherited data up, and then defining unique fields to this subclass 
class Male extends Person {
  constructor(gender, hobbies, name, age, hairColor) {
    //call super class passing only inherited related data up to super to use its functionalities based off these params, and then define unique data for a subclass male below it
    super(name, age, hairColor);
    this.gender = gender;
    this.hobbies = hobbies;
  }

  showHobbies () {
    this.hobbies.forEach(hobby => console.log(hobby));
  }
}

//instnatiate a new person object
// const Tanner = new Person('Tanner Barcelos', 24, 'Brown');
// Tanner.sayName();

//make a new male
const Tanner = new Male('M', ['Football', 'Sports in general', 'Coding', 'Tanner Barcelos', 24, 'Brown']);
Tanner.showHobbies();





///////////////////////////
//ES6 Promises


//this is a weird condept: look more in to it
const prom = new Promise((resolve, reject) => {
  //everything here is async code: that is, it runs in the background concurrently and does not block the next bit of code to run in the top down code
  setTimeout(() => {
    resolve(getData()); //resolves the promise getting some data (in this simple case, we call a method which could be uses in a server side to gather json, etc.) once this resolves, the returned data from this resolve can be retrived in a .then
    reject(new Error('Something went wrong'))  //if an error gathering data for our resoolve method , we can catch and send the reject which also retuns a promise, thus, in catch() we can pass a variable and access that data as well! Super cool
  }, 2000); //ms
}).then(val => console.log(val))
  .catch(err => console.log(err))

function getData () {
  return 1000;
}


/////////////////////////////
//look into async/await to understand it more

// async function returnData () {
//   const data = await getData();
//   console.log(data);
// }
// returnData()