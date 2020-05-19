//creating a set instance
const ids = new Set ([100000, 2, 3, 3, 4, 5, 9, 9]);
ids.add ({
  name: 'tanner',
  id: 110991,
});

//we can pass an interable to the constructor of the set (any iterable) and it ignores dusplicates
// notice i also added an object. very cool

console.log (ids.size); //can get the size

console.log (ids.has (9)); //.has(val) returns t/f if a value is in it

//we can loop a set using a loop and .entries() and destructure to just pull out the data and not an index
for (let [val] of ids.entries ()) {
  console.log (val);
}

//we can delete :
if (ids.has (2)) {
  ids.delete (2);
}

//sets are great for uniqueness

console.log (ids);

/////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Maps: uniquely keyed object style data structures
 * 
 *  - they ar elike objects, but cannot have duplicate keys
 */

//lets make some objects of people data we will use to work with to convert things into a map
const p1 = {
  name: 'al',
  age: 55,
};
const p2 = {
  name_: 'dawn',
  age_: 55,
};

//pulling the data out of the object to use it (destructuring object practice: every variable must match, in order, what we want)
//and have a matching name to the value in the object
const {name, age} = p1;
const {name_, age_} = p2; //again destructuring pulling out the exact key of the object as the variable to reference it

const personData = new Map (); //step 1: always make a new map instance to work with

personData.set (name, age); //setting the key to be the object person 1 name and the value to be age
personData.set (name_, age_);
console.log (personData.get ('al')); //as w eknow, when we want to get a value from a map, we pass the key and it will lookup and return its value [returns undefined if not found/valid]
console.log (personData.get ('dawn'));

console.log (personData.entries ());

//loop the whole object for key and values using entries: have to use destructuruing for arrays to pull out the key/value pair property (this is a must!)
for (let [key, val] of personData.entries ()) {
  console.log (`Key: ${key} ..... Val: ${val}`);
}

//we can loop just the keys using .keys()
for (let key of personData.keys ()) {
  console.log (key);
}

//we also can loop just values
for (let vals of personData.values ()) {
  console.log (vals);
}

//of course we can convert the map to an array and use reduce on it to sum things up (maybe sum the ages of every user in our system for an app)
// etc. ALWAYS USE Array.from(iter) to convert an iterable to an array
