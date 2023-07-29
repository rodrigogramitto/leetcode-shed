// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

const productOfArrayExceptSelf = (nums) => {
  return nums.map((number, index, arr) => {
    let temp = 1;
      for (var i = 0; i < arr.length; i++) {
        if (index !== i) {
          temp *= arr[i];
        }
      }
      if (temp === -0) {
        return Math.abs(temp)
      } else {
        return temp;
      }
  })
}

if (module === undefined) {
  var module = {};
}

module.exports = productOfArrayExceptSelf;