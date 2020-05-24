/**
 * This code is my solution to solving the pipular 'valid anagram' problem.
 * An anagram is a word that matches another word, either in the same sequence of 
 * characters, or not. 
 * 
 * e.g: racecar   <->  carcera [both are anagrams! This is NOT ] a palindrome
 * 
 * the task here is to return if the second string is an anagram of the first
 */

const validAnagram = (s, t) => {
  if (t.length > s.length || t.length < s.length) {
    return false;
  }
  if (s.length === 0 && t.length === 0) {
    return true;
  }

  let s1Map = new Map ();
  let s2Map = new Map ();

  //loop every letter OF the string and add it to the map
  for (let letter of s) {
    //if the value exists, its returned from our or and +1 else, 0 is returned and we add 1 for occurence 1
    s1Map[letter] = (s1Map[letter] || 0) + 1;
  }

  //loop every letter OF the string and add it to the map
  for (let letter of t) {
    s2Map[letter] = (s2Map[letter] || 0) + 1; //could also use get() but this way seems to be popular on leetcode
  }

  //check if the keys exist in both map and also that their values are equal. If either are not, return false, alse fall through and return true
  for (let i in s1Map) {
    console.log (i);
    if (!(i in s2Map)) return false;

    if (s1Map[i] !== s2Map[i]) return false;
  }
  return true;
};

validAnagram ('rac', 'car');
