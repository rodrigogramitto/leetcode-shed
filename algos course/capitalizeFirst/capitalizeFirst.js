// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst (strings, n = 0) {

  if (strings.length === n) {
    return strings;
  }
  let modified = strings[n][0].toUpperCase() + strings[n].substring(1);
  strings[n] = modified;
  return capitalizeFirst(strings, n + 1);
}

let actual1 = capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

console.log(actual1);
