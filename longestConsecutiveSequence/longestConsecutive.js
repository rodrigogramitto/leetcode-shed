// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9


var longestConsecutive = (nums) => {
  if (!nums.length) return 0;

  nums.sort((a, b) => a - b);

  return search(nums);
}

const search = (nums) => {
  let [ maxScore, score ] = [ 1, 1 ];

  for (let i = 1; i < nums.length; i++) {/* Time O(N) */
      const isPrevDuplicate = nums[i - 1] === nums[i]
      if (isPrevDuplicate) continue

      const isStreak = nums[i] === ((nums[i - 1]) + 1)
      if (isStreak) { score++; continue; }

      maxScore = Math.max(maxScore, score);
      score = 1;
  }

  return Math.max(maxScore, score);
}

module.exports = longestConsecutive;

let actual1 = longestConsecutive([100,4,200,1,3,2]);
let actual2 = longestConsecutive([1,2,0,1])
console.log(actual1);