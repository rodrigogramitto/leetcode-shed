// Given an unsorted array of integers nums,
// return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9


var longestConsecutive = function(nums) {
  if (!nums.length) return 0;

  nums.sort((a, b) => a - b);

  let [maxScore, score] = [1, 1];

  for (let i = 1; i < nums.length; i++) {
      let isPrevDuplicate = nums[i] === nums[i - 1];
      if (isPrevDuplicate) continue;

      const isSequence = nums[i] === (nums[i - 1] + 1);
      if (isSequence) {score++; continue;}

    maxScore = Math.max(maxScore, score);
    score = 1;
  }

  return Math.max(maxScore, score);
};

let actual1 = longestConsecutive([100,4,200,1,3,2]);

console.log(actual1);