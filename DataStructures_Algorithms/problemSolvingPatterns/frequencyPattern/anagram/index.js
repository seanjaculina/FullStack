/**
 * Problem statement:
 * 
 * Given two strings, write a function to determine if the second string is an anagram
 * of the first. An anagram is a word, phrase, or name formed by rearranging the letters
 * of another, such as cinema, formed from iceman
 * 
 * examples:
 * 
 * validAnagram('','')          // true
 * validAnagram('aaz', 'zaz')   // false
 * validAnagram('rat', 'tar')   // true
 * validAnagram('tann', 'tan')  // false
 * 
 */

/**
 * this can be refactored down to using only one map and comparing the count of chars
 * in str1 with str2 occurences. we know if any character is left in str1 after iterating str2
 * vice, versa, we do not have an anagram
 */
const validAnagram = (str1, str2) => {

  // edge cases
  if (str1.length !== str2.length) return false;

  // map creation
  const [map1, map2] = [new Map(), new Map()];

  // loop both strings [for...of for strings]
  for (let i of str1) {
    map1.set(i, (map1.get(i) || 0) + 1)
  }
  for (let i of str2) {
    map2.set(i, (map2.get(i) || 0) + 1)
  }
  for (let letter of map1.keys()) {
    if (map1.get(letter) !== map2.get(letter)) return false;
  }
  return true;
}

console.log(validAnagram('', ''))
console.log(validAnagram('aazc', 'zazd'))
console.log(validAnagram('rat', 'tar'))
console.log(validAnagram('tann', 'tan'))
console.log(validAnagram('anagram', 'gramana'))