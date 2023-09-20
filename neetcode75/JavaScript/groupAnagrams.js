// Given an array of strings strs,
// group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]


function groupAnagrams(strs) {
  // create an object where key is sorted string and value is string
  let group = {};

  // iterate over strs
  for (var i = 0; i < strs.length; i++) {
        // if object at current string sorted is undefined
        let curr = strs[i];
        let sorted = curr.split('').sort().join('');
        if (!group[sorted]) {
          group[sorted] = [curr];
        } else {
          group[sorted].push(curr);
        }
  }

  return Object.values(group);
};

let actual1 = groupAnagrams(["eat","tea","tan","ate","nat","bat"]) // [["bat"],["nat","tan"],["ate","eat","tea"]]

console.log(actual1);

