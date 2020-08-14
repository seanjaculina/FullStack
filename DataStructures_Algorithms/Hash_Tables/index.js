/**
 * this file will show implementation for hash table - we will solve collisions with two approaches (chaining and open addressing) -> chaining is more intuitive but gives up time
 */
class HashTable {
  constructor() {
    this.table = Array(100).fill(null); // init a new array [always use array constructor to do this] of size 100 with null at each index - each bucket will be an index that holds a linked list or sub-array
  }

  // we are assuming the key is a string in this table, so, we much loop the key, and determine the character code at that char, and accumulate a long number
  // of codes and then hash that number to get the index to place the key/value at

  // hash method: hashes the key and determines the index position to place the new key/value pair
  hash(key) {
    let currHash = 0;
    for (let char of key) {
      currHash += char.charCodeAt(0); // <-- get the ascii code of the character currently looking at and add it to our hash value
    }

    // hash the value and get the index
    return currHash % this.table.length;
  }

  // Puts a new key/val pain in the hashtable - overrides existing key if it exists
  set(key, val) {
    const indexOfHash = this.hash(key); // hash the key passed in to determine where to insert our new key/val pair into the hashtable
    this.table[indexOfHash] = [key, val]; // find the index of the table to insert this in to and put a sub-array of the key/value in this container (this is so we can iterate and see the key/values)
  }

  // Gets the value at the given key
  get(key) {
    const hashedKey = this.hash(key); // hash the key
    // if the key exists, return the value this key holds - remove [1] to return the whole sub array with the key/val
    if (this.table[hashedKey] !== null) {
      return this.table[hashedKey][1];
    } else {
      return null;
      // throw new Error(`${key} does not exist`); <-- throw an error potentially. This seems more proper and prevents weird behaviors
    }
  }

  // returns an array of all key/value pairs currently in the hash table
  entries() {
    let _ = [];
    for (const val in this.table) {
      // if the current bucket in the table has a value, that means we hashed a key and placed some data here so push the key/val data into the entries array to return
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

// main method - tests all our methods etc. in our Hash Table class
const main = () => {
  const table = new HashTable();

  table.set("tanner", 24);
  table.set("hayden", 23);
  console.log(table.get("tanner"));
  console.log(table.get("tred"));
  // console.log(table.repr());

  // get all key/val entries in the current hash table
  for (const [key, val] of table.entries()) {
    console.log(key, val);
  }

  // lets simulate adding my name to the table - confirm there should be 4 1's and 1 2
  const name = "tanner";
  for (let i of name) {
    table.set(i, (table.get(i) || 0) + 1);
  }
  console.log(table.repr());
};

main();
