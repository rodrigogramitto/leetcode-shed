const isAnagram = require('./validAnagram');

describe('Test if a string is an anagram of another', () => {
  test('it should return true if is anagram', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true)
  })
  test('it should return false if is not anagram', () => {
    expect(isAnagram('rat', 'car')).toBe(false)
  });
})