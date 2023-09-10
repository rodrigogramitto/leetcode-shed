// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array containing each word capitalized.

function capitalizeWords (words) {
  let capitalized = [];

  if (words.length <= 1) {
    capitalized.push(words[0].toUpperCase())
    return capitalized;
  }
  capitalized.push(words[0].toUpperCase());
  return capitalized.concat(capitalizeWords(words.slice(1)))
}

 let words = ['i', 'am', 'learning', 'recursion'];
let actual = capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

console.log(actual);