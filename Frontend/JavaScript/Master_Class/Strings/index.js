/**
 * This file will demonstrate string methods (we know strings can be iterated over using for loops, using for of or in )
 * 
 * but we want to get into valuable methods
 */

const location = 'santa-clara:ca:95051:lat-45690:long-45129000:deg-190.78.34';

//lets parse this string getting individual portions of it using split()  : takes in a delimeter (the character to split at)
//returns an array of the split words
const locationData = location.split (':');
console.log (locationData);

//we can use object.assign to make a default object of the array where every key is a number from 0 - length of the array
// of course we can make a pre-defined object with empty string, loop the array and then assign each property of the object with that value in the array
const locationObj = Object.assign ({}, locationData);
locationObj[2] = +locationObj[2]; //<- the zip was passed as a string: we can convert a string (if its a number completely) to parse it into an integer like this (or use parseInt())
console.log (locationObj);

//and likewise, we can take an array of strings, and join them into one string by some delimeter as well!

//lets print the location data as a space seaprated sentence (we would use json.stringify or our own object to handle this type of request
//but this is for explaining purposes)
const query = locationData.join (' ');
console.log (`Data Query: ${query}`);
