// Write a recursive function called someRecursive which accepts an array and a callback.
// The function returns true if a single value in the array returns true when passed to the callback.
// Otherwise it returns false.



function someRecursive(arr, callback){

  if (arr.length === 0) {
    return false;
  }
  let last = arr.pop();

  if (callback(last)) {
    return true;
  }

  return someRecursive(arr, callback);
}

// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

// let actual1 = someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
let actual2 = someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

// console.log(actual1);
console.log(actual2);