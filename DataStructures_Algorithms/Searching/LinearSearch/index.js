/**
 * This file will explain/show how linear search works
 * 
 * 
 * Linear search is a search aglroithm that looks at each element in some collection
 * comparing it to a query and returns true/false if any element in that collection matches the query
 * 
 * Complexity analysis:
 * -----------------------------
 * best case: O(1) if value existed at start position of search (obviously rare)
 * avg case: O(N)
 * worst: O(N)
 * 
 * 
 * A good example is finding a number in an un-sorted list [it casn be sorted but then we would prefer binary search.. in another file I explain this]
 * 
 * find() indexOf() etc. algorithms in the Array prototype API all use linear searchso they all cost O(N)
 */

// Assume we have some array of states we wish to seach in
const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

// lets write a linear search function that will search for some state in the array
const linearSearchStates = state => {
  if (!state) {
    throw new Error('Must input a state')
  }
  for (const s of states) {
    if (s === state) {
      return true
    }
  }
  return false
}

// another to find a number in an array and return its index [if it does not exist, return -1]
const getIndex = (arr, val) => {
  if (!arr || !val) throw new Error('Expects a value')

  // for...in will account for the indices where for...of will simply get the values [we can index for...in with the collection[index]]
  for (const i in arr) {
    if (arr[i] === val) {
      return +i;
    }
  }
  return -1;
}

const main = () => {
  const stateExists = linearSearchStates('canada');
  stateExists === true ? console.log('Exists') : console.log('DNE')

  const arr = [1, 2, -4, 9, 10, 3, 99, 44];
  const indexOf = getIndex(arr, -4);
  console.log(`Found -4 at index: ${indexOf}`);

}
main()