/**
 * This file will explain the popular search algorithm: Binary Search
 * 
 * Caveat: Array/Container MUST be sorted to search it
 * 
 *  Keys:
 *  - faster than linear search
 *  - cuts the collection in half only looking in those sub arrays until a value is potentially found -> this type of approach is called 'Divide and Conquer'
 * 
 *  We get the middle, and then compare the search query to the current mid for every iteration of the search until we get to the value (if possible)
 * 
 *  Complexity:
 *  -----------------
 *  Time: O(logN) -> avg   (best again is O(1))
 *  Space: O(1) no aux space needed
 */

// some of my code uses ES6 arrow functions and some use pure function declarations: they all work the same for the cases of solving these problems (this is not the case when getting into data structures)

// iterative solution
function binarySearch(arr, key) {
  if (arr.length < 1) return -1;

  let first = 0;
  let last = arr.length - 1;

  while (first <= last) {
    // no integer division like python: math.floor() the division to get the truncated midpoint WE MUST CALCULATE MID IN Binary Search!
    let mid = Math.floor((first + last) / 2);
    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] > key) {
      last = mid - 1;
    } else {
      first = mid + 1
    }
  }
  return -1;
}

// recursive implementation: default values being passed in to first and last pos in array incase user does not define something else
function binSearch(arr, key, first = 0, last = arr.length - 1) {

  // base case
  if (first > last) return false;

  let mid = Math.floor((first + last) / 2)
  if (arr[mid] === key) {
    return mid;
  } else if (arr[mid] > key) {
    return binSearch(arr, key, first, mid - 1)
  } else {
    return binSearch(arr, key, mid + 1, last);
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(arr, 6));
console.log(binSearch(arr, 5));