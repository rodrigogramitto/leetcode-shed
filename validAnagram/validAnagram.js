
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging
// the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

/*
Strategies

Split and sort both strings
return string1 is equal string2
*/
const isAnagram = function(s, t) {
  return s.split('').sort().toString() === t.split('').sort().toString();
};

if (module === undefined) {
  var module = {}
};

module.exports = isAnagram;

