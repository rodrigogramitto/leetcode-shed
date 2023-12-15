// Given an array of integers nums,
// sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n))
// time complexity and with the smallest space complexity possible.

// Example 1:

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3),
// while the positions of other numbers are changed (for example, 1 and 5).
// Example 2:

// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessairly unique.


// swap helper method
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

// pivot helper -> will move elements before pivot if smaller
const pivot = (arr, start = 0, end = arr.length - 1) => {
  let pivot = arr[start];
  let pIdx = start;

  for (let i = start; i <= end; i++) {
    if (arr[i] < pivot) {
      pIdx++;
      swap(arr, i, pIdx);
    }
  }
  swap(arr, start, pIdx);

  return pIdx
}


// sort function -> will call pivot helper on nums
const sortArray = (arr, l = 0, r = arr.length - 1) => {
  if (l < r) {
    let pIdx = pivot(arr, l, r);
    pivot(arr, l + 1, pIdx);
    pivot(arr, pIdx, r - 1);
  }
  return arr;
}



let nums = [5,2,3,1];
let nums2 = [8,6,7,5,3,0,9];
let sorted = sortArray(nums);
let sorted1 = sortArray(nums2);

console.log(sorted) // expect [1,2,3,5];
console.log(sorted1);