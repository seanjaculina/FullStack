/**
 * Write a function called fib which accepts a number n and returns the nth term in the
 * fibonacci sequence
 * 
 * the first two terms of the fibonacci sequence are defined (in this problem as 1, 1, then 2,3,5,8...)
 * 
 *  examples:
 *    fib(4)  == 3
 *    fib(10) == 55
 *    fib(28) == 317811 
 * 
 */

// recursive implementation is common and intuitive
function fib(n) {
  if (n === 0) return 0
  if (n === 1) return 1
  return fib(n - 1) + fib(n - 2)
}

console.log(fib(4))
console.log(fib(28));