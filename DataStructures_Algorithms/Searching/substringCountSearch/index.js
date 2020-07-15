/**
 * find how many times a short word occurse in the long string
 */

// search for a substring : find short in long, if it exists
function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break
      if (j === short.length - 1) count++
    }
  }
  return count;
}

console.log(naiveSearch('lorie loled', 'lo')) // 2 matches