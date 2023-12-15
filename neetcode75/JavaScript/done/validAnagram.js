// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// sorting solution
var isAnagram = function(s, t) {
   if (s.length !== t.length) return false;
  return s.split('').sort().toString() === t.split('').sort().toString()
};

// frequency counter solution

var isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  let freq = {};

  for (var i = 0; i < s.length; i++) {
    if (freq[s[i]]) {
      freq[s[i]]++;
    } else {
      freq[s[i]] = 1;
    }
  };

  for (var i = 0; i < t.length; i++) {
    if (!freq[t[i]] || freq[t[i]] === 0) {
      return false;
    } else {
      freq[t[i]]--;
    }
  }
  return true;
}