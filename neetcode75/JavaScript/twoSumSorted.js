// Given a 1-indexed array of integers numbers that is already
// sorted in non-decreasing order, find two numbers such that they add up to a specific target number.
// Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.

// Return the indices of the two numbers, index1 and index2,
// added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].


// I: Nums array
// O: Index1 and index2 array of sums
// C: Constant extra space
// E: No repeated numbers, have to return indexes in 1-index format

var twoSum = function(numbers, target) {
  // keep track of seen values -> object with number as key, and value as true.
  //(might have to have arr of indeces as val);
  // let seen = {};
  // initiate left and right pointers at 0 (start), and num.length - 1 (end);
  let [l, r, curr] = [0, numbers.length - 1, 0];

  // while left is smaller than right
  while (l < r) {
    // if I havent seen these elements before
    let [lVal, rVal] = [numbers[l], numbers[r]];
    // let seen = (seen[lVal] && seen[rVal]);
    // if (!seen) {
    //   seen[lVal] = true;
    //   seen[rVal] = true;
    // } else {
    //   continue;
    // }
    // if current equals target
    curr = lVal + rVal;
    if (curr === target) {
      return [l + 1, r + 1];
    } else if (curr < target) {
      l++;
    } else {
      r--;
    }
  }
    return null;
};

let actual = twoSum([2,7,11,15], 9) // [1, 2];
let actual2 = twoSum([2,3,4], 6) // [1,3];
let actual3 = twoSum([-1,0], -1) // [1, 2];

console.log(actual)
console.log(actual2)
console.log(actual3);