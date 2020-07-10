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

// optimized solution
const validAnagram = (str1, str2) => {

  // edge cases
  if (str1.length !== str2.length) return false;

  // map creation
  const map1 = new Map()

  // loop string 1
  for (let i of str1) {
    map1.set(i, (map1.get(i) || 0) + 1)
  }

  // loop string 2 comparing each character to the occurence in string 1--- return false if some count is off
  for (let letter of str2) {
    if (!(map1.get(letter))) return false

    // else decrement the occurence in the map by 1 : this essentially is handling the case
    // that some letter in s2occurs more than s1 
    map1.set(letter, map1.get(letter) - 1)
  }
  return true;
}

console.log(validAnagram('', ''))
console.log(validAnagram('aazc', 'zazd'))
console.log(validAnagram('rat', 'tar'))
console.log(validAnagram('tann', 'tan'))
console.log(validAnagram('anagram', 'gramana'))