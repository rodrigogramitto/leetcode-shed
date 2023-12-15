// Given n non-negative integers representing an elevation map where the width of each bar is 1,
// compute how much water it can trap after raining.


// Example 1:


// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9

// I: height array
// O: area of water (int)
// C: N/A
// E: Something regarding beginning and ending of array

var trap = function(height) {
  // define left and right pointers as 0 and 1;
  let [l, r] = [0, 1];
  // define total
  let [total, temp] = [0, 0];

  // while right is smaller than height (maybe needs to be length - 1)
  while (r < height.length) {

    // define left height and right height
    let [lH, rH] = [height[l], height[r]];
    // if leftH is smaller than one
    // increment left height
    if (lH < 1) l++;
    if (lH > rH && rH > height[r + 1]) l++;

    // if right height is smaller than left height
    if (rH < lH) {
      // add leftH - rightH to temp
      temp += (lH - rH);
    }

    // if right height is larger or equal than left height
    if (rH >= lH) {
      // distance is (r - l + 1)
      // area is distance * min between lh and rH
      // total is area - 2 * min between lh and rh (walls);
      let distance = r - l + 1;
      console.log('distance', distance);
      l = r;
    }
    // increment right
    r++;
  }

  // return total
  return total;
};

let actual1 = trap([0,1,0,2,1,0,1]) // 2
// console.log(actual1);