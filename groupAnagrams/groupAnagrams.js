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


/*Strategy
I: array of strings
O: array of arrays of grouped strings by anagram
C: N/A
E: N/E
*/
var groupAnagrams = function(strs) {
  let grouped = {};

  for (var i = 0; i < strs.length; i++) {
    let currentSorted = strs[i].split('').sort().toString();
    // if current string split, sorted and joined is not key at object
    if (!grouped[currentSorted]) {
      // define new key as sortedString and value as array containing string
      grouped[currentSorted] = [strs[i]];
  // else push current string into object at sortedString
    } else {
      grouped[currentSorted].push(strs[i]);
    }
  }

// return object values
  return Object.values(grouped);
};

var actual1 = groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
console.log(actual1[2]) // [["bat"],["nat","tan"],["ate","eat","tea"]]



if (module === undefined) {
  var module = {}
}

module.exports = groupAnagrams;