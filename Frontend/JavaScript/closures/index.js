//closure example: a function that retains data across calls (a function that maybe returns another function that is bound to the outter function and saves its data)
function add(num) {
  const MULTI = 20;
  function sum(num2) {
    return MULTI * (num + num2);
  }
  return sum;
}
const ap = add(10); //10 will be preserved in ap. and then when we call ap(param) at this point it will use the saved value 10 and add it to the second param and then invoke the multri factor
console.log(ap(2));

//another example: a counter! We can use a nested function that works with the local count of the parent function but yet this is still private to the outter function so that means no code outrside the closure can change the counter! All functions in javascript have access to the scope of a function above them therefore, the example below can change the counter with one call, withough having to make the count global

//this is a function expression where a variable is assigned a function expression. We also encased it in () which means this is also a self invoking method therefore it starts automatically without being called
const counter = (function () {
  let count = 0;
  //our nested function which has access to the local count in counter but is technically gflobal to accumulate! Neat! This is a closure.
  function accumulate() {
    return (count += 1);
  }
  //returning the innerfunction will always preserve the data inside the inner function as its local there. Closures allow for private data in parent functions
  return accumulate;
})(); //<- wrapping a function in parens in this way (function stored in a var) allows for the whole expression to be assigned as a function itself to counter and invoke it

console.log(counter()); //<- if we didnt do () on line 22, we would need to pass counter into a variable to then call it

//a closure is nothing more than a frunction that retains its data and typically contains a nested function that can access the super functions data and work with it

//////////////////////////////////THIS//////////////////////////////////////////////

//refers to global scope which is the window object on client
this.table = 'window table';

const cleanTable = function (soap) {
  console.log(`Cleaning ${this.table} using ${soap}`);
};

//this is now its own property with its own table
this.garage = {
  table: 'garage table',
};

//using Object.call() to call the method on some this and passing the funstions param
cleanTable.call(this, 'soapy soap');
cleanTable.call(this.garage, 'absolutely soapy soap'); //notice we are passing garage and not the table attreibute. How does it still call table?! Well, when we are using cleanTable function, javascript is actually going to call the function and then in the string interpolation, notice we did this.table. Because of this, we bound this.garage to the first property of call, and our function that we used the call binding on was able to extrapolate table prop from it and use it. This is amazing
