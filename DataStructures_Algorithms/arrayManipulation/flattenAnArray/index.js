/**
 * this module will show how to flatten an array.. 
 * that is, take an array of arrays and turn it into a single-dimmensional array
 * 
 * we will need Array.prototype.concat() , Array.prototype.isArray()
 * and, due to my preference for ES6+, Array.prototype.forEach()
 * 
 * this solution is the recursive implementation to parse the sub-arrays in the given array.. see mdn for recursion if you do not know/understand this
 * 
 * see all methods on MDN
 * 
 */

const flatten = arr => {

  // create a blank array that wil represent the flattened array
  let flatArray = [];

  // loop the array
  arr.forEach(element => {
    // check if the element is a sub-array
    if (Array.isArray(element)) {
      // if the element is an array, recurse on that sub-array concatenating those values to the flattened array
      flatArray = flatArray.concat(flatten(element));
    } else {
      flatArray.push(element);
    }
  })
  return flatArray;
}

// main method [using function declaration instead of expression simply for practice on retraining the syntax and differences]
function main() {
  const arrayToFlatten = [
    [1, 22, 3], 41, 05, [6, 7.98, 8, 99, ], 101
  ];
  const flattened = flatten(arrayToFlatten);
  for (const i in flattened) {
    console.log(`Index: ${i}  value: ${flattened[i]}`)
  }
}

main();