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


const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

const pivot = (arr, start = 0, end = arr.length - 1) => {
  let pivot = arr[start];
   let pIndex = start;

   for (let i = start + 1; i <= end; i++) {
     if (arr[i] < pivot) {
      pIndex++;
       swap(arr, i, pIndex);
     }
   }
   swap(arr, start, pIndex);
  return pIndex;
}

const sortArray = (nums, left = 0, right = nums.length - 1) => {
  // while left is smaller than right
  if (left < right) {
    let pIndex = pivot(nums, left, right);
    sortArray(nums, left, pIndex - 1);
    sortArray(nums, pIndex + 1, right);
  }
  return nums;
}





let nums = [5,2,3,1];
let sorted = sortArray(nums);

console.log(sorted) // [1,2,3,5];