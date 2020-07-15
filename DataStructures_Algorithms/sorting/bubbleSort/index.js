/**
 * this file will demonstrate how to implement/use the bubble sort sorting algorithm
 * 
 * bubble sort is really not that efficient or used much, but, it is still good to know as a fast-to-implement sorting implementation on the fly
 */

// time: O(n^2) 
const bubbleSort = arr => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      // checking in ascending: flip sign to make the sort in descending
      if (arr[j] > arr[j + 1]) {
        // swap
        swap(arr, j, j + 1)
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

// swap helper
const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

const arr = [1, 4, 2, -1, 90, 44, 39, 24, 101, 900, 33, 21, 0, 29];

const sortedArr = bubbleSort(arr);

console.log(sortedArr);