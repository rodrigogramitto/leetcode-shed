// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

var twoSum = function(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }
  nums.sort((a, b) => a - b);
  let [l, r] = [0, nums.length - 1];

  while (l < r) {
    let sum = nums[l] + nums[r];
    if (sum === target) return [map[nums[l]], map[nums[r]]];
    if (sum < target) {
      l++;
    } else {
      r--;
    }
  }
  return null;
};

let actual1 = twoSum([2,7,11,15], 9) // [0,1]
let actual2 = twoSum([3,2,4], 6) // [1,2]

console.log('actual1', actual1);
console.log('actual2', actual2);