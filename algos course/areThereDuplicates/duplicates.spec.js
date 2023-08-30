const areThereDuplicates = require('./areThereDuplicates.js');

describe('checks wether there are any duplicates among arguments passed in', () => {
  test('should return true if there are duplicate arguments', () => {
    expect(areThereDuplicates(1,2,3,2)).toBe(true)
    expect(areThereDuplicates('a', 'b', 'c','b')).toBe(true)
  });
  test('Should return false if there are no duplicate arguments', () => {
    expect(areThereDuplicates(34,14)).toBe(false)
    expect(areThereDuplicates('d', 'c')).toBe(false);
  })
})