/**
 * write a functiuon productOfArray that takes in an array and returns
 * the product of the whole array
 * 
 * examples:
 * 
 *  productOfArray([1,2,3]) // 6
 *  productOfArray([1,2,3,10]) // 60
 * 
 *  Hint: avoid recursion an actually use Array.prototype.reduce()
 */

// solution
function productOfArray(arr) {
  // note: starting from 1 and not the usual 0
  return arr.reduce((i, j) => i * j, 1)
}

console.log(productOfArray([1, 2, 3]))
console.log(productOfArray([1, 2, 3, 10]))