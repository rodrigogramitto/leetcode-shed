// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.


// I: array of nums
// O: array of triplets (nums that add to zero), where each triplet is in an array
// C: N/A
// E: N/A

// brute force method
const threeSum = (nums) => {
  // define triplets array
  let triplets = [];
  // sort nums to handle duplicates
  nums.sort((a, b) => a - b);

  // iterate through nums skipping the last value
  for (var i = 0; i < nums.length - 2; i++) {

  // if i is greater than 0 and nums at index equals nums at index minus one
  if (i > 0 && nums[i] === nums[i - 1]) {
    continue;
  }

  // define left and right as index plus one and nums length minus one
  let [left, right] = [i + 1, nums.length - 1];

  // while left is smaller than right
  while (left < right) {
    // let sum equal nums at i, left and right
    let sum = nums[i] + nums[left] + nums[right];
    if (sum === 0) {
      triplets.push([nums[i], nums[left], nums[right]]);

      // while left is smaller than right and nums at left = nums at left +1
      while (left <= right && nums[left] === nums[left + 1]) {
        left++;
      }

      // while left is smaller than right and nums at right = nums right - 1
      while (left >= right && nums[right] === nums[right - 1]) {
        right--;
      }
      left++;
      right--;
    } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
  }
}
return triplets;
};

module.exports = threeSum;

var actual1 = threeSum([-1,0,1,2,-1,-4]) // Expected: [[-1,-1,2],[-1,0,1]]
