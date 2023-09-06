// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and returns the length
// of the longest substring with all distinct characters.

// find sliding window implementation
// I - string
// O - Int length
// C - O(n)
// E - N/A

function findLongestSubstring(str){
 let [start, end, maxLen] = [0, 0, 0];
 let chars  = {};

 while (end < str.length) {
    let char = str[end];
    if (chars[char] !== undefined) {
      start = Math.max(start, chars[char] + 1);
      chars[char] = end;
    }
    chars[char] = end;
    end++;
    maxLen = Math.max(maxLen, end - start);
 }

 return maxLen;
}

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6
// Time Complexity - O(n)

// let actual1 = findLongestSubstring(''); // 0
// let actual2 = findLongestSubstring('rithmschool'); // 6
// let actual3 = findLongestSubstring('thisisawesome'); // 7
// let actual4 = findLongestSubstring('bbbbbb'); // 1
// let actual5 = findLongestSubstring('longestsubstring'); // 8
// let actual6 = findLongestSubstring('thisishowwedoit'); // 6
let actual7 = findLongestSubstring('thecatinthehat') // 7
// console.log(actual1);
// console.log(actual2);
// console.log(actual3);
// console.log(actual4);
// console.log(actual5);
// console.log(actual6);
console.log(actual7)

module.exports = findLongestSubstring;