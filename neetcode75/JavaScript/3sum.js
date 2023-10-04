// Given an integer array nums,
// return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

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

// brute force method is to nest two loops
// sort array first
  // outer keeps track of first value
  // iner loop starts at start and end and skips outer (two pointers)
  // if sum is greater than zero decrement right
  // if sum is smaller increment left
  // if sum is zero
    // sums at i equals nums at i, j, k
      // remove j, k from nums
function threeSum(nums) {
        let result = [];

        if (nums.length < 3) {
          return result;
        }

        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length - 2; i++) {
          if (i > 0 && nums[i] === nums[i - 1]) {
            continue; // Skip duplicates to avoid duplicate triplets
          }

          let left = i + 1;
          let right = nums.length - 1;

          while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
              result.push([nums[i], nums[left], nums[right]]);
              while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates
              while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates
              left++;
              right--;
            } else if (sum < 0) {
              left++;
            } else {
              right--;
            }
          }
        }

        return result;
      }


let actual1 = threeSum([-1,0,1,2,-1,-4]); // Output: [[-1,-1,2],[-1,0,1]]




