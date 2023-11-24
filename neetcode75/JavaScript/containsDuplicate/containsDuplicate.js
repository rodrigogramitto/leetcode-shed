var containsNearbyDuplicate = function(nums, k) {
  let map = {};

  for (let idx in nums) {
    let num = nums[idx];
    if (map.hasOwnProperty(num)) {
      let isInRange = idx - map[num] <= k;
      if (isInRange) return true;
    }
    map[num] = idx;
  }
  return false;
};

let actual1 = containsNearbyDuplicate([1,2,3,1], 3) // expect true;
console.log(actual1);
let actual2 = containsNearbyDuplicate([1,2,3,1,2,3], 2) // expect false;
console.log(actual2);
let actual3 = containsNearbyDuplicate([1,0,1,1], 1) // expect true;
console.log(actual3);
