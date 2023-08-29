// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false

const validPalindrome = (str) => {
  // define bool to hold exception
  let exception = false;

  // define left and right pointers as start and end of string
  let [left, right] = [0, str.length - 1];

  // while left is smaller than right
  while (left < right) {
      // if string at left is not equal to string at right
      if (str[left] !== str[right]) {
          // if exception is true
          if (exception) {
            return false;
          } else {
            exception = true;
          }
      }
      left++;
      right--;
  }
  return true;
}

console.log(validPalindrome('shalash'));

if (module === undefined) {
  var module = {};
}

module.exports = validPalindrome;