let sentence = 'Your PIN number is 1234!';

function countOccurences (value) {
  //empty string case
  if (value.length <= 0 || value === null || value === undefined) {
    return -1;
  }

  value = value.toLowerCase ();

  let occurences = new Map ();

  //iterate the map: use 'of' for map iteration
  for (let char of value) {
    //check if the character is in the map: if it is, incremenet its value at that key with .get()+1
    if (occurences.has (char)) {
      occurences.set (char, occurences.get (char) + 1);
    } else {
      //else, char does not exist, give it a frequency of 1
      occurences.set (char, 1);
    }
  }
  return occurences;
}

const occur = countOccurences ('banner');

occur !== -1
  ? occur.forEach ((val, key) => console.log (`Key: ${key}  occurence: ${val}`))
  : console.log ('Collection was empty');
