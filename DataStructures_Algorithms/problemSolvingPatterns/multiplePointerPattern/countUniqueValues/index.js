/**
 *  Problem statement:
 * 
 *  Implement a function called countUniqueValues, which accepts
 *  a sorted array, and counts the unique values in the array. There
 *  can be negative numbers in the array, but it will always be sorted
 * 
 *  Sample outputs:
 * 
 *  countUniqueValues([1,1,1,1,1,2])                 // 2
 *  countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])    // 7
 *  countUniqueValues([])                            // 0
 *  countUniqueValues([-2,-1,-1,0,1])                // 4
 * 
 *  So it seems that if a value has already been seen, we can ignore it, and if it has not,
 *  it is deemed unique [all first occurences of a value will make the number unqique] and any duplicates 
 *  will be stripped
 * 
 *  // a better way to do this is use a set() and not two pointers as there is no need for that
 */

const countUniqueValues = arr => {
  if (arr.length === 0) return 0
  const set = new Set(arr);
  return set.size
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]))
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))
console.log(countUniqueValues([]))
console.log(countUniqueValues([-2, -1, -1, 0, 1]))