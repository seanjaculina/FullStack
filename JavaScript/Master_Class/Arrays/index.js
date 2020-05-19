/**
 * 
 * This file will provide information on array methods and interation
 * 
 * 
 */

//convert some iterable-type object to an array
/**
 * Accomplished using:
 *  The Array.from() 
 *        method creates a new, shallow-copied Array instance from an array-like or iterable object.
 */

//this logic converts a string to an array using the Array.from()

let name = 'Tanner';
const nameArr = Array.from (name);
console.log (nameArr);

//loop an iterable with no sense of the index count, but soleley the value
for (let letter of nameArr) {
  console.log (letter);
}

//Array mutability methods

//push() <-pushes a new item to the array at the end
nameArr.push ('Barcelos'); //<- in this case we added a word: JS is forgiving, though, so we can push any valid type

//we can also add objects of course: we will mimick passing some 'json' (object) to the array
const post = {
  name: 'bob',
  email: 'bob@gmail.com',
  date: new Date (),
  id: Math.floor (Math.random () * nameArr.length),
};

const post2 = {
  name: 'bob',
  email: 'bob@gmail.com',
  date: new Date (),
  id: Math.floor (Math.random () * nameArr.length) + 1,
};

nameArr.push (post);
nameArr.push (post2);
console.log (nameArr);

const arrToAdd = [4, 5, 2, 1];

//we can add to the front of an array using unshift() : this example adds an array to it, but we can do anything we want
nameArr.unshift (arrToAdd); // < puts [4,5,2,1] at index 0

/**
 * [
 * [ 4, 5, 2, 1 ],
  'T',
  'a',
  'n',
  'n',
  'e',
  'r',
  'Barcelos',
  {
    name: 'bob',
    email: 'bob@gmail.com',
    date: 2020-05-19T18:38:57.282Z,
    id: 6
  },
  {
    name: 'bob',
    email: 'bob@gmail.com',
    date: 2020-05-19T18:38:57.282Z,
    id: 5
  }
]
 */

//cool so we can add the whole array object itself as an index

/**
 * What if we want to copy an existing array and put its contents into a new array and add some more values to that new array?
 * 
 * Good example would be:
 * 
 *      - we have an array of grocery items representing our shopping cart. We want to always update that shopping cart to 
 *      show the current state of the cart + or - any items a user wishes to add or get rid of. How could we update that array
 *      to copy all its current data and then add or remove an item to that old array of items to update it? Well, we can 
 *      use push() but what if we do not want to directly alter the state of the cart, only reset it with updates so its always assured to be the 
 *      most recent? We can copy contents into another array using the spread operator!! 
 */

let thisCart = ['apples', 'pears', 'oranges', 'banana'];

//lets update the cart completely and add some oatmeal and bread
thisCart = [...thisCart, 'oatmeal', 'bread'];
console.log (thisCart); // as we see, we used the spread operator to pull out all indices of the cart, and throw them into this reassignment of the cart and then added some new data to it ALL WITHOUT PUSH! So cool

//the above example is good for state in react and redux: but what about for apps not using that?

//lets copy numsof array to an array of odds
const nums_of = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const odds = [1, 3, 5, 7, 9, 11, 13, 33, ...nums_of]; //<- will comboine odds with numsof
const combinator = [...odds]; //will put odds as a copy into combinator
console.log (odds);
console.log (combinator);

//spread is simply used for copying over iterable values into some new iterable (used freequently) and also passing the whole collection
//to some funcion that can take a sequence (ex) Math.min(...thisCart) remember it will pass the elements as a list therefore because min() requires a comma-sep list, we can pass it (if we had just passed a reference to the array, it would not work)

//we are always passing references to the objects if we copy an array of objects somewhere else, etc. Because of this,
//if we change something about an object when copying the object, array of them etc. will actually affect the original object

//if we do not want to affect the state of the original data in the oriinal object, we should map the array of objects to a new array of objects
//that way we no longer reference the data of the original onbject as we made a new array with new objects exactly targeting rh e properties of the old object [see video 202 in udemy course]. This is called cloning! When we
//take an existing object, and copy it when we plan to change that objects data, but do not want to touch the original object

//removing last element

//pop()
nameArr.pop (); // <-- should remove post 2 that we had pushed [pop returns the value we removed, so we can put it ina  variable if we like]

//shift()  <-- removes front: shift elemennts to 1 place to the left [so, unshift will add an element to front, and shift everything RIGHT] so shift will insert and move everything left!
nameArr.shift (); // will remove front (which is 5 [console log will prove thus]) and then everything moves left, so 4 becomes index 0
nameArr.shift (); //should have 4 at index 0: this call will remove 4 (will show in th elog)

//what about indexing a position out of the bounds of the current lenght? JS will place empty indices to fill out the gap between what you added
// this is very rare: good to know that we can target indices that technically dont exist but in other langugaes, this is an error, therefore it is not used

//what about inserting an element at some index?

//splice()  <-- must be called on an actual array object (not a nodelist, etc)

//nameArr.splice(start,itemsToDeleteFrom,insertObject/val) is the syntax [if we want to simply insert, and not delete anything (most common) just put a 0]

//lets add a new post becore post 1
const post3 = {
  name: 'bomb!',
  email: 'bomb.com@gmail.com',
  date: 2020,
  id: 0,
};

//insert a new post in the index before post1
let val = nameArr.length;
nameArr.splice (9, 0, post3);

//what if we did this and wanted to delete all elements from this new index on? Just use that same index and it will scan ona and delete
// replcare the 0 in the splice with 9 and it will delete everything from 9 on (deletes the last pist)

//the splice method is commonly used for deleting large collections or all the values in an array! If we pass only one value into the param, it iwll actually delete everything from param on

//delete the whole array exvept index 0 [param is inclusive, so we want to pass 1] intuitively, knowing this, if we wanted to delete a whole arrays contents, just pass it 0
//when we only pass one element, that means we omitted the end which means JS knows to delete everything from the start we passed
nameArr.splice (1);

//key thing: splice() returns all the values we revmoved (just like pop) that way we can keep track of stuff we removed, if we need to

//so splice is good for inserting into a position(param 1) and removing items after it, or not (0 in param 2)  and then the value/reference to some object to insert is the optional third arg. if we are utilizing splice for insertion

//what about copying an array or taking a sub-array of it and usong it somewhere? We can use slice() as one example

//slice() returns a new array based off the optional start and end-1 position passed in (empty will return everuthing)
let copy = nameArr.slice (); //<--returns the whole array
copy = nameArr.slice (4, 8); // <- returns values at index 4 - 7 (end-1) however, our array right now is empty since we spliced everything except index 0 iun our code above, but, we kniow it works. And the great thing is if we are trying to slice
//an area that isnt even in the array (in our case index 4-7 which is out of bounds) we get no error

//passing slice with only one value returns the whole array from param -> length-1

//what about pulling an existing array and adding those values to another array with each value rather than push() which would add a whole array as the index?
//we use concat() or as we know the spread/rest operator which is es6

let newest = [4, 5, 9, 10, 33, 55];
let oldest = [1000, 2000, 4000];
copy = oldest.concat (newest);

//what about finding an index occurence? use indexOf() or lastIndexOf()

//indexOf starts at left and returns the first occurence index position of the param
console.log (copy.indexOf (4)); // <- should return index 3 is where 4 is
console.log (copy.lastIndexOf (33));

//index of does not work for finding objects! We have a different method for that

console.log ('this is a copy' + copy);
console.log (nameArr);

//find and findIndex()

//fin() takes in a function that tracks the current val, current index and the array itself and returns if what we want to find is found
const found = newest.find ((val, ind, persons) => {
  return val === 10;
});

console.log (found, newest);

//findIndex() takes in the same as find, but returns the index of the found value [if we want to find 10 in our newest we know that its at index 3 (position 4)]

//higher order methods   SORT(),MAP(),FILTER(),REDUCE()

//we have a sort method which can sorts an array (by default converts all indices to strings and sorts that but this is not good:
//we actually want to pass it a callback function to compare two values in sequence)

let arrays = [10, 4, 111, 44, 99, 101, -5, 0];

arrays.sort ((a, b) => {
  //takes current and next and if the result is neg, it swaps, if its pos, it continues or if its equl it continues
  return a - b;
});

console.log (arrays);

//also reverses using reverse()
console.log (arrays.reverse ());

//filter() returns a new array of everything except what we are filtering out [for example, lets filter out all odds from arrays]
const evens = arrays.filter (val => val % 2 === 0 && val > 0); //for one param arrows and one line logic, we can use shorthand notation liek this

console.log (evens);

//what about manipulating everything in an array ? we can use map() which will take each value and do soemthig to it (which is the logic we do)
//lets show this by squaring everythign in our evens array
let sqr = evens.map (val => val * val); //return() is implicit in the one liners ALWAYS REMEMBER THAT
console.log (sqr);

//what about if we want to bundle up a collection, say, for summing up the whole collection indices? We can use reduce(prev,curr,twoMoreOptionalParams)

//lets sum up the sqr array using reduce with our counter starting at 0
let init = 0;
let sum = sqr.reduce ((previous, current, index, values) => {
  //negate index and values (we usually never pass the last two params in (see MDN))
  console.log (index + ':' + values); // <-- this line shows that the array never is changed! reduce() only works on the array DOES NOT CHANGE IT -> HIGHER ORDERS RETURN NEW ARRAYS/VALUES BUT DO NOT MESS UP ORIGINAL
  return (previous += current);
}, init); // <- the seconda param after our callback(which accepts up to 4 values) is the intiial count, or state of what we are reducing (this method is highly used and important)
// i made a global var for this to be fancy, but typically we pass just an actual Number
console.log (sum); // <-- 1936 + 100 + 16

let newSum = sqr.reduce ((prev, curr) => (prev += curr), 0); // <-- 1 line concise approach
console.log (newSum);

//map,filter,reduce and sort are very important and useful. We see these a lot in JS frameworks like react for rendering!
//of course, for array minipulation like removing, inserting, deleting and copying we can use all the methods learned earing (splice and slive used a lot)
//we will also see that we use spread alot in JS frameworks for both backend and frontend a lot

//we can chain array methods together to work concurrently to preodcue some output

//lets sum up the prices of 5 grocery item object props, that are in an array shopping cart (this is a good design for the prohect i want to make)
let cart = [
  {
    productName: 'Apple',
    desc: 'Fuji',
    price: 2.99,
  },
  {
    productName: 'Pear',
    desc: 'Ripe Pear',
    price: 3.99,
  },
  {
    productName: 'Orange',
    desc: 'Tropicana',
    price: 1.99,
  },
  {
    productName: 'Celery',
    desc: 'Mini cut',
    price: 4.99,
  },
];

//how could we return an array of prices first of all? We can map()
const prices = cart.map (item => item.price);
console.log (prices);

//what about summing up the prices? reduce()
const totalCart = cart.reduce ((prev, curr) => {
  return (prev.price += curr.price);
}, 0);
console.log (totalCart); // what? NaN? Issue... how about we try chaining?

const cartStatus = cart
  .map (item => {
    return item.price;
  })
  .reduce ((prev, curr) => {
    return (prev += curr);
  }, 0);

console.log (cartStatus); //BOOM! This works. Why? Well, when we chain that means we are performing multiple operations on an object
//that supports that.. map returns an array, thus, that call can then call reduce to work on that mapped array and sum up our cart totals

//we see how this logic would work for making a shopping cart logic for an e-commerce app

//Array destructurong: a way to extract indices from an array without a loop
const [a, b] = [100, 200]; // a references index 0 of the array which is 100, etc.
console.log (a, b);

const h = [1, 2, 3, 4, 5];
const [f, g, z] = [100, 200, ...h]; //look at this! We pointed f,g,h to 100,200, and ...h so f,g,h are now variable constants that can be used wherever we'd like
console.log (f, g, z); //notice z === 1 because the spread operator used on h brings in the whole array, therefore, we only access the third element in the sequence we point to.
//to get the whole array for z to point to, we must either put brackets aroung ...h or maze z a rest also (i like making z a rest)
const [an, ban, ...can] = [900, 800, ...h];
console.log (an, ban, can); // <- now can is a whole array like we wanted
