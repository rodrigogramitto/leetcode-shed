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


// we will need a swap helper method
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// we will need a pivot helper
const pivot = (arr, start = 0, end = arr.length - 1) => {
   let pivot = arr[start];
   let pIdx = start;

   for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      pIdx++;
      swap(arr, i, pIdx);
    }
   }
   swap(arr, start, pIdx);

   return pIdx;
}

// we will need a sort function to call methods
const sortArray = (arr, start = 0, end = arr.length - 1) => {
  if (start < end) {
    let pIdx = pivot(arr, start, end);
    sortArray(arr, pIdx, end - 1);
    sortArray(arr, start + 1, pIdx);
  }
  return arr;
}



let nums = [5,2,3,1];
let nums2 = [8,6,7,5,3,0,9];
let sorted = sortArray(nums);
let sorted1 = sortArray(nums2);

console.log(sorted) // expect [1,2,3,5];
console.log(sorted1);