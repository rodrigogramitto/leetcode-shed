// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.


// Example 1:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1


// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

// brute force solution
// var maxArea = function(nums) {
// if (nums.length === 2) {
//   return nums[0] * nums[1];
// }
// let max = 0;

// // iterate through height
// for (var i = 0; i < nums.length; i++) { // outer
//   // inner
//   for (var j = i; j < nums.length; j++) {
//     // define heigth, and length
//     let [length, heigth] = [j - i, Math.min(nums[i], nums[j])];
//     let currentArea = length * heigth;
//     max = Math.max(max, currentArea)
//   }
// }

// return max;
// };

var maxArea = function(nums) {
let [left, right, max] = [0, nums.length - 1, 0];

while (left < right) {
  const [leftHeight, rightHeight] = [nums[left], nums[right]];
  const area = (Math.min(leftHeight, rightHeight) * (right - left));
  max = Math.max(max, area);

  if (leftHeight <= rightHeight) {
    left++;
  }
  if (leftHeight > rightHeight) {
    right--;
  }
}
return max;
};

module.exports = maxArea;

