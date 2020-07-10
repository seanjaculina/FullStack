/**
 * Problem statement:
 * 
 *  Write a function called sumZero which accepts a sorted array of intergers. The
 *  function should find the first pair where the sum is 0. Return an array that
 *  includes both values that sum to zero or undefined if a pair dne
 * 
 * 
 *  examples:
 *    
 *      sumZero([-3,-2,-1,0,1,2,3])   // [-3,3]
 *      sumZero([-2,0,1,3])           // undefined
 *      sumZero([1,2,3])              // undefined
 */


// O(N) time, O(1) space
const sumZero = (arr) => {
  if (arr.length < 1) return []

  const targetSum = 0;

  // set up two pointers
  let [p1, p2] = [0, arr.length - 1];

  while (p1 < p2) {
    let currentSum = arr[p1] + arr[p2];
    if (currentSum === targetSum) {
      return [arr[p1], arr[p2]];
    } else {
      // if not a match, we need to determine if the sum was > 0 or < 0. 
      // Depending on that result, we decrement right if the sum > 0 as the right sees only values > 0
      // and if it was < 0 we increment left as left only sees values < 0
      currentSum > targetSum ? p2-- : p1++
    }

  }
  // return undefined by default
  return []
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 10]))
console.log(sumZero([-2, 0, 1, 3]))
console.log(sumZero([1, 2, 3]))

/**
 * the key thing is that the array is sorted: because it is, we can continually compress the array from left/right
 * pointers till we get a sum. If the array was not sorted, the logic would be much different
 */