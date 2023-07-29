// Given an integer array nums and an integer k,
// return the k most frequent elements.
// You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// I: num [] , k elements for amount of frequency
// O: array containing k most frequent elements
// C: O(n log n) logarithmic time
// E: N/A

// My solution
const topKFrequent = function(nums, k) {
  if (nums.length === 1) {
    return nums;
  };

  let sorted = [];
  nums.sort((a, b) => {
    return a - b;
  });

  let temp = []
  for (var i = 0; i < nums.length; i++) {
      if (nums[i] !== nums[i + 1]) {
        temp.push(nums[i])
        sorted.push(temp);
        temp = [];
      } else {
        temp.push(nums[i])
      }
  }

  sorted.sort((a, b) => {
    return b.length - a.length;
  })

  let result = []
  for (var i = 0; i < k; i++) {
    result.push(sorted[i][0])
  }

  return result;
};

if (module === undefined) {
  var module = {}
}

module.exports = topKFrequent;

