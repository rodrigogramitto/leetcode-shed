const findLongestSubstring = require('./longestSubstring.js');

describe('should return length of longest substring with unique chars', () => {
  test('should return int', () => {
    expect(findLongestSubstring('')).toBe(0)
    expect(findLongestSubstring('rithmschool')).toBe(7)
    expect(findLongestSubstring('thisisawesome')).toBe(6)
    expect(findLongestSubstring('thecatinthehat')).toBe(7)
    expect(findLongestSubstring('bbbbbb')).toBe(1)
    expect(findLongestSubstring('longestsubstring')).toBe(8)
    expect(findLongestSubstring('thisishowwedoit')).toBe(6)
  })
})