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
  // define hashmap to store triplets
  let triplets = {};

  // for each number, index
  nums.forEach((number, index) => {
    // define temp array
    let temp = [];
    // define left and right
    let [left, right] = [0, nums.length];
    // while left is smaller than right
    while (left < right) {
      // if left and right unequal index
      if (left !== index && right !== index) {
        // if nums at left plus nums at right plus nums at index equal 0
        if ((nums[left] + nums[right] + nums[index]) === 0) {
          // push all to temp
          temp.push(nums[left], nums[right], nums[index])
          console.log(temp);
          // if triplets at temp is undefined
          if (!triplets[`${temp}`]) {
            return triplets[`${temp}`] = temp;
            break;
          }
        }
      }
      left++;
      right--;
    }
  })
  // return object keys
  return Object.values(triplets);
};

module.exports = threeSum;

var actual1 = threeSum([-1,0,1,2,-1,-4]) // Expected: [[-1,-1,2],[-1,0,1]]
console.log(actual1[0], actual1[1], actual1[2]);