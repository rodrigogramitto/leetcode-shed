const isPalindrome = require('./validPalindrome.js');

describe('should check if string is palindrome', () => {
 test('should return true if string is palindrome', () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  expect(isPalindrome(" ")).toBe(true);
 });

 test('should return fals eif string is not palindrome', () => {
  expect(isPalindrome("race a car")).toBe(false);
 })

})