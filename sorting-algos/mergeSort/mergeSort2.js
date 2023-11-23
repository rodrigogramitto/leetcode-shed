
const mergeSort = (nums) => {
  let len = nums.length;
  let half = Math.floor(len / 2);

  if (len <= 1) return nums;

  let left = mergeSort(nums.slice(0, half));
  let right = mergeSort(nums.slice(half, len));
  return merge(left, right);
};

const merge = (arr1, arr2) => {
  let merged = [];
  let [l, r] = [0, 0];

  while (l < arr1.length && r < arr2.length) {
    if (arr1[l] < arr2[r]) {
      merged.push(arr1[l]);
      l++;
    } else {
      merged.push(arr2[r]);
      r++;
    }
  };

  while (l < arr1.length) {
    merged.push(arr1[l]);
    l++;
  };
  while (r < arr2.length) {
    merged.push(arr2[r]);
    r++;
  }
  return merged;
}

let sorted = mergeSort([8,6,7,5,3,0,9])
console.log(sorted);
