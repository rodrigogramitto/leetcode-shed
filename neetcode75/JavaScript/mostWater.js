// You are given an integer array height of length n.
// There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
// In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

const maxArea = (height) => {
  let [l, r, max] = [0, height.length - 1, 0];

  while (l < r) {
    let [leftHeight, rightHeight] = [height[l], height[r]];
    let area = (r - l) * (Math.min(leftHeight, rightHeight));
    max = Math.max(max, area);
    if(leftHeight <= rightHeight) l++;
    if(rightHeight <= leftHeight) r--;
  }
  return max;
};

let actual = maxArea([1,8,6,2,5,4,8,3,7]); // expected 49;
let actual2 = maxArea([1,1])
console.log(actual2);
