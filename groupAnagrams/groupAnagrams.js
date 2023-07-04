// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// /**
//  * @param {string[]} strs
//  * @return {string[][]}
//  */
const isAnagram = (s, t) => {
  return s.split('').sort().toString() === t.split('').sort().toString();
}

var groupAnagrams = function(strs) {
  let anagrams = [];

for (var i = 0; i < strs.length; i++) {
  let currentAnagrams = [strs[i]]
  strs.forEach((str, index) => {
    if (strs[i] !== str && isAnagram(strs[i], str)) {
      currentAnagrams.push(str)
    }
  })
  anagrams.push(currentAnagrams);
}

  return anagrams;
};

var actual1 = groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
console.log(actual1);


if (module === undefined) {
  var module = {}
}

module.exports = groupAnagrams;