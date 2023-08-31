// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and
//checks whether the characters in the first string form a subsequence
//of the characters in the second string.
//In other words, the function should check whether the characters in the first string appear
// somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O(1)


function isSubsequence(str1, str2) {
  if (str1.length > str2.length) {
    return false;
  }

let count = str1.length - 1;
// define left and right pointers
let [l, r] = [0, 0];

// while right is smaller than string2 length
while (r < str2.length - 1) {
    if (count === 0) {
      return true;
    }
      // if left char equals right char
      if (str1[l] === str2[r]) {
       count--;
       l++;
       r++;
      } else {
        r++;
      }
}

return count === 0;
}

module.exports = isSubsequence;