// You are given a string s and an integer k.
// You can choose any character of the string and change it to any other uppercase English character.
// You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achive this answer too.

var characterReplacement = function(s, k) {
    let result = 0;
    let freq = new Map();
    let l = 0;

    for (let r = 0; r < s.length; r++) {
      let len = r - l + 1;
      freq.set(s[r], 1 + (freq.get(s[r]) || 0));

      if (len - Math.max(...freq.values()) > k) {
        freq.set(s[l], freq.get(s[l]) - 1);
        l++
      }
      len = r - l + 1;
      result = Math.max(result, len);
    }


    return result;
};
