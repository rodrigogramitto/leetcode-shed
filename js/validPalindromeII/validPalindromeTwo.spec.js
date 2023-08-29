const validPaldindrome = require('./isValid.js');

describe('Should test if word is palindrome with one exception', () => {
  test('should return true if string is palindrome', () => {
    expect(validPalindrome('aba')).toBe(true)
  })
  test('should return true if string is not palindrome', () => {
    expect(validPalindrome("abc")).toBe(false)
  })
  test('should return true if string is palindrome after removing one char', () => {
    expect(validPalindrome('abca')).toBe(true);
  })
})