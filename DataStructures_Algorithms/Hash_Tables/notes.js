/**
 * This file shows examples/uses of hash tables (maps/JS object) and their use cases.. We will contrast / refer to this when implementing our own custom hash table
 */

// determine if a string is unique or not. That is, all characters in the string do not repeat - IGNORE CASE
const isUnique = (str) => {
  const map = new Map();
  for (let char of str.toLowerCase()) {
    if (map.get(char)) return false;
    map.set(char, 1);
  }
  return true;
};

console.log(isUnique("Tanner"));
console.log(isUnique("abcC"));
console.log(isUnique("abc"));
