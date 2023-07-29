const longestConsecutive = require('./longestConsecutive.js');

describe('Given unsorted array of integers, return length of longest consecutive elements', () => {
  test('it should return longest sequence', () => {
    expect(longestConsecutive([100,4,200,1,3,2])).toBe(4);
    expect(longestConsecutive([0,3,7,2,5,8,4,6,0,1])).toBe(9);
    expect(longestConsecutive([1,2,0,1])).toBe(3);
  })
})