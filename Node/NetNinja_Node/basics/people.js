const people = [
  {
    name: "Tanner",
    age: 24,
    _id: Math.random() * 100 + 3,
  },
  {
    name: "Hayden",
    age: 23,
    _id: Math.random() * 100 + 3,
  },
  {
    name: "Jen",
    age: 28,
    _id: Math.random() * 100 + 3,
  },
];

// we can also inline export as well - but you cannot do this and module.exports in the same file
// must be one or the other - we can move the person itself to the module.exports object to get around this
// exports. person = {}
const person = {
  name: "Bob",
  age: 100,
  _id: Math.random() * 100 + 3,
};

// Export the people array - exported as an object that will contain all properties
// passed to it - if one value, this is the default export for the whole module
module.exports = {
  people,
  person,
};
