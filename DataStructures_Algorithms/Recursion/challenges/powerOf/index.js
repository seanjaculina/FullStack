/**
 * Write a function called power which accepts a base and exponent
 * in the form power(base, exponent) [you can name these whatever you choose].
 * 
 * The function should return the power of the base to that exponent. You cannot use math.pow()
 * 
 * You need not to worry about negative bases and exponents
 * 
 * 
 * examples
 * 
 *   power(2,0)   // 1
 *   power(2,2)   // 4
 *   power(2,4)   // 16
 *   power(0,1)   // 0
 * 
 *   remember:
 *      0 ^ # === 0
 *      n ^ 0 === 1
 */

// solution 1
function power(n, m) {
  if (n === 0) {
    return 0;
  }
  if (m === 0) {
    return 1
  }
  return n * power(n, m - 1)
}


console.log(power(2, 0))
console.log(power(3, 2))
console.log(power(10, 2))