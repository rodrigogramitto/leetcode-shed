const isSubsequence = require('./isSubsequence.js');

describe('Checks if string1 is substring of string2', () => {
  test('Should return true if substring', () => {
    expect(isSubsequence('hello', 'hello world')).toBe(true)
    expect(isSubsequence('sing', 'sting')).toBe(true)
    expect(isSubsequence('abc', 'abracadabra')).toBe(true); // true)
  });
  test('Should return false if not substring', () => {
    expect(isSubsequence('abc', 'acb')).toBe(false)
  })
})