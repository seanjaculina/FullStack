let arr = [1, 2, 3, 4, 5];
console.log ('pre reverse: ' + arr);

//function to reverse an array
const reverser = arr => {
  let p1 = 0;
  let p2 = arr.length - 1;

  // O(N)
  while (p1 <= p2) {
    let temp = arr[p1];
    arr[p1] = arr[p2];
    arr[p2] = temp;
    p1++;
    p2--;
  }

  return arr;
};

//save the function call [can also just pass to clg]
let res = reverser (arr);

console.log (res);
