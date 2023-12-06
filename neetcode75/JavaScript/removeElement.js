var removeElement = function(nums, val) {
  var idx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[idx] = nums[i];
      idx++;
    }
  }
  return idx;
};

let nums = [0,1,2,2,3,0,4,2]
let actual1 = removeElement(nums, 2);

console.log(nums);

