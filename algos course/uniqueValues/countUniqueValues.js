// Implement a function called countUniqueValues,
// which accepts a sorted array, and counts the unique values in the array.
// There acan be negative numbers inb\ the array, but it will always be sorted.

const countUniqueValues = (nums) => {
  let counter = 0;
  if (nums.length < 1) {
    return 0;
  }

  let [left, right] = [0, 1];

  while (right <= nums.length) {
    if (nums[left] !== nums[right]) {
      counter++;
      left = right;
    }
    right++;
  }
  return counter;
}

if (module === undefined) {
  var module = {};
}

module.exports = countUniqueValues;

