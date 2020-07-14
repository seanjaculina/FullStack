/**
 * Write a function called facotrial that will return the factorial
 * of that number. This is straight forward.. Here are examples
 * 
 * Examples:
 *  
 *  factorial(1) === 1
 *  factorial(4) === 24
 *  factorial(7) === 5040
 */

// recursive 1-liner
function factorial(n) {
  return (n === 0 || n === 1) ? 1 : n * factorial(n - 1)
}
console.log(factorial(7))
console.log(factorial(10))