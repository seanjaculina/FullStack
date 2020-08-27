/**
 * this file will show implementation for hash table - we will solve collisions with two approaches (chaining and open addressing) -> chaining is more intuitive but gives up time
 */
class HashTable {
  constructor() {
    this.table = Array(100)
      .fill(null)
      .map(() => []);
  }

  // we are assuming the key is a string in this table, so, we much loop the key, and determine the character code at that char, and accumulate a long number
  // of codes and then hash that number to get the index to place the key/value at

  // hash method: hashes the key and determines the index position to place the new key/value pair
  hash(key) {
    let currHash = 0;
    for (let char of key) {
      currHash += char.charCodeAt(0); // <-- get the ascii code of the character currently looking at and add it to our hash value
    }
    return currHash % this.table.length;
  }

  // Puts a new key/val pain in the hashtable - overrides existing key if it exists else adds to the bucket array
  set(key, val) {
    const hashedIndex = this.hash(key);
    const pair = [key, val];

    const bucket = this.table[hashedIndex];

    const storedElement = bucket.find((pair) => pair[0] === key);
    storedElement ? (storedElement[1] = val) : bucket.push(pair);
  }

  // Gets the value at the given bucket by the key
  get(key) {
    const hashedKey = this.hash(key);
    const bucket = this.table[hashedKey];

    const pair = bucket.find((pair) => pair[0] === key);
    return pair ? pair[1] : undefined;
  }

  // returns an array of all key/value pairs currently in the hash table
  entries() {
    let _ = [];
    for (const val in this.table) {
      if (this.table[val] !== null) {
        _.push(this.table[val]);
      }
    }
    return _;
  }

  // returns the table so we can iterate over all of it in the client if we wish or print it, etc.
  repr() {
    return this.table;
  }
}

// main method - tests all our methods etc. in our Hash Table class - wrapped as an IIFE to run immediately without explicit invocation
const main = (() => {
  const table = new HashTable();

  table.set("tanner", 24);
  table.set("hayden", 23);
  console.log(table.get("tanner"));
  console.log(table.get("tred"));

  for (const [key, val] of table.entries()) {
    console.log(key, val);
  }

  const name = "tanner";
  for (let i of name) {
    table.set(i, (table.get(i) || 0) + 1);
  }
  table.set("r", 101);
  console.log(table.repr());

  console.log(table.get("tanner"));
})();
