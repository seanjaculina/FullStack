/**
 * this file will represent a basic understanding of recursion
 */

// this function will recursively count down from n to 1 outputting each value
function countDown(n) {
  // base case: n === 0 [we strictly want to countdown til 1 , not 0]
  if (n === 0) {
    console.log('Done');
    return;
  }
  console.log(n)
  countDown(n - 1);
}

// this function will sum all numbers from n -> 0 recursively
function sum(n) {
  // base case: if we get down to 0 return 0 as 1+0 will not affect the sum
  if (n === 0) {
    return n;
  }
  return n + sum(n - 1);
}

// this function will calculate the factorial of a given n
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1)
}

// 1-line JS implementation of factorial
function oneLineFact() {
  return (n === 1 || n === 0) ? 1 : n * oneLineFact(n - 1)
}

const fac = factorial(5);
console.log(`Factorial of 5 is: ${fac}`)

const sum_ = sum(10);
console.log(`The sum from n to 0 was: ${sum_}`)

countDown(10);