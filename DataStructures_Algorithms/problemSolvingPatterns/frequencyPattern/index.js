/**
 * problem statement:
 * 
 * Write a function called same, which accepts two arrays. The function should return true if
 * every value in the first array has its corresponding value squared in the second array.
 * 
 * The frequency of the values must be the same
 * 
 * Test case samples:
 * 
 *  ->  same([1,2,3], [4,1,9])    // true
 *  ->  same([1,2,3], [1,9])      // false
 *  ->  same([1,2,1], [4,4,1])    // false
 */

// O(N) time and space
function same(arr1, arr2) {

  if (arr1.length !== arr2.length) return false;

  const [map1, map2] = [new Map(), new Map()]

  arr1.forEach(value => {
    map1.set(value, (map1.get(value) || 0) + 1)
  })
  arr2.forEach(value => {
    map2.set(value, (map2.get(value) || 0) + 1)
  })
  for (const key of map1.keys()) {
    if (!(map2.has(key ** 2))) {
      return false;
    }
    if (map2.get(key ** 2) !== map1.get(key)) {
      return false;
    }
  }
  return true;
}
console.log(same([1, 2, 3], [1, 4, 9]))
console.log(same([1, 2, 3], [1, 9]))
console.log(same([1, 2, 4], [16, 4, 1]))


/**
 * 
 * Pseudo code
 * 
 * step 1) edge cases
 * step 2) instantiate two maps for both arrays
 * step 3) iterate , with two separate loops [retains O(N)] each value in the array adding it to the map or increasing its frequency
 * step 4) Create a final loop that will look through map 1
 *    a) perform a check on the current value if that value ^ 2 exists in the map2 [return false if it does not]
 *    b) if it does, fall through and check if the frequency of the squared value that exists === to the frequency of the 
 *       non-squared key.. if they do not match, also break
 * step 5) If both cases pass, continue the loop. By default the function returns true so if we make it through witout ever failing the cases
 *         we can deduce that the arr1 has all values squared and the same frequency in arr2
 */