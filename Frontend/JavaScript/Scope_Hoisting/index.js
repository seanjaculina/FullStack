// Global scope
var myAge;
myAge = 24;

// Local scope
const greet = (nameOf) => {
  // local to greet() but global to newGreet()
  const name = nameOf;
  console.log(`${name} is of local scope`);

  // name is local to greet() but is now global to this nested function which means we can use it down inside this next scope
  const newGreet = () => {
    console.log("Inside nested function and accessing", name);
  };
  newGreet();
};

// console.log(name);  <-- error: name is not defined. Of course! name is local to the greet function and not the global scope.
console.log(greet("Tanner")); // <-- now name can be used as we executed the function that stored that local variable

// Block scope: let/const usage - anything inside {} brackets [blcoks of code like if() or loops, etc.] creates a block scope, where the score
//is only assigned to that block
// and will not work outside that block
const blocker = () => {
  const hello = "hello"; // <-- this is in the inital block of the function, therefore hello is local to this function. And global to any  nested functions
  // only the initial function brackets are ignored for block scope, and any subsequent blocks will conform
  // this will be a block
  if (true) {
    const block = "this is block scope";
    console.log(block);
    console.log(hello); // proves hello is global to the nested blocks, but maintains local state to this function
  }
  //console.log(block); // this does not work as the block variable was in the block scop starting line 27-30
};

blocker();

// is this block or global? the answer is block! Because we used const, technically it is block scoped as the whole script technically has {} wrapping it all
const helloThere = "hi there!";
// console.log(helloThere);
// console.log(helloThere.split("").reverse().join("")); <-- just messing with functional programming... ignore

// the global scope belongs to the global object / global context [we are in node so this wont show us, but if you go run line 44 in a console in a browser, it will output the window]
//console.log(this);

// 'this' always refers to the execution context/bound object [by default 'this' (not in node) refers to the window object as its execution context]

// this is a function expression [also can be known as a constructor function], so it creates its own execution context which in turn makes 'this' refer to the greeting function anywhere within that scope
// const greeting = function () {
//   this.age = 24;
//   console.log(this.age);
//   console.log(this); //
// };
// greeting();

// arrow funcrtions() => {} : arrows do not care about 'this', therefore by default, it will bind to the object / execution context its defined in
// in this case, the below functionw ill refer to the global context (window in non node environments) [arrows always find the closest exewcutiuon context and attach to it]
const arrow = () => {
  console.log("Arrow called");
  console.log(this); // confirm in console in browser.. in node this will be proven by a {} as the arrows closest execution context is the window
};

function name() {
  console.log(this);
}

name();
arrow();

const object = {
  name: "Tanner",
  // this will output undefined as arrows bind to closest parent context and the parent of this function is window, not 'object'
  greet: () => {
    console.log("My name is", this.name);
  },
  // this works! 'this' is bound to the objects context
  newGreet() {
    console.log("My name is", this.name);
  },
};
object.greet(); // undefined as 'this' in arrow functions refer to closest execution context which happens to be window in browser.. use function expressions, enhanced properties in JS objects
// to properly use 'this' because arrow functions do not have a 'this' and that is why it refers to window
object.greet.bind(object);
object.greet();
object.newGreet();

/**
 * 'this' is tricky.
 *
 *  Just remember arrow functions do not have a 'this' therefore they always bind to the nearest execution context
 *  function expressions and declarations bind to their parents context, always.
 *  we can change binding objects/contexts using .bind() when needed or making prototypes
 */

// this is hoisting in action. JS is read top to bottom, and will gather all functions and variables and compile the code and then interpret the code it needs to
// and then executes it and shows results. We can call functions before they are declared, it does not really matter in JS (other languages, this will not work)
console.log(bye());
//hi(); there is a caveat, though: if using arrow functions or expressions, the function is not hosited, whether or not using 'var' therefore
// these things will not work.. only function declarations are hoisted and var variables are hoisted.. see below
function bye() {
  return "bye";
}

const hi = () => {
  console.log("hi");
};

// console.log(tanner);  <-- tried to print tanner variable before declaring it when using let/const... but var does! var ALWAYS is hoisted however
// you still do not see the result, but you get no error because function/variable declarations get hoisted, but not their definitions, there for
// only let tanner is hoisted, and not the assignment therefore JS will know about tanner and its existence but will not know its contents till it is actually used
// after the assignment!
// let tanner = "tanner";

console.log(tanner);
var tanner = "tanner";

// hoisting exists in the global scope and also in function scope and block scope so, keep an eye out
