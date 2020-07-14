/**
 * Write a function called recursiveRange() which accepts a number n
 * that returns the sum of 0 -> n
 * 
 * examples:
 *  recursiveRange(6)  // 21
 *  recursiveRange(10) // 55
 */

// long way
function recursiveRange(n) {
  if (n === 0) {
    return n
  }
  return n + recursiveRange(n - 1)
}

// 1 liner
function recurRange(n) {
  return (n === 0) ? n : (n + recurRange(n - 1))
}

console.log(recursiveRange(6));
console.log(recurRange(10));