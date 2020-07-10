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

  if (str1.length !== str2.length) return false;

  const map1 = new Map()

  for (let i of str1) {
    map1.set(i, (map1.get(i) || 0) + 1)
  }

  for (let letter of str2) {
    if (!(map1.get(letter)))
      return false
    map1.set(letter, map1.get(letter) - 1)
  }
  return true;
}

console.log(validAnagram('', ''))
console.log(validAnagram('aazc', 'zazd'))
console.log(validAnagram('rat', 'tar'))
console.log(validAnagram('tann', 'tan'))
console.log(validAnagram('anagram', 'gramana'))