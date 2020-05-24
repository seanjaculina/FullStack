/**
 * Write a function that takes in two arrays. Return true or false if the second array only holds values that are squares of the first
 * array. You can assume no empty inputs are given
 * 
 * Examples:
 *    same([1,2,3],[4,1,9]) //true   1^2 == 1 2^2 == 4 3^2 === 9  [order is irrelevant. Only confirmation of squares matters]
 *    same([1,2,3],[1,9])  //false  lengths differ so we already know they are not valid
 */

const same = (arr1, arr2) => {
  //edge case: array 2 is smaller than array 1
  if (arr1.length > arr2.length) {
    return false;
  }

  //create a map where the keys are array1 values squared and the val is the original value of each index in that array
  let sqrs = new Map ();
  arr1.forEach (val => {
    sqrs.set (val ** 2, val);
  });

  for (let i = 0; i < arr2.length; i++) {
    //if this value is in the original array as its square, continue
    if (sqrs.get (arr2[i])) {
      continue;
    }
    return false;
  }
  return true;
};

const res = same ([1, 4, 3], [16, 9, 1]);
console.log (res);
