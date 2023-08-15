const countUniqueValues = require('./countUniqueValues.js');

describe('Must count unique values', () => {
  test('should return 2', () => {
    expect(countUniqueValues([1,1,1,1,1,2])).toBe(2)
  });
  test('should return 7', () => {
    expect(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])).toBe(7)
  })
  test('should return 0', () => {
    expect(countUniqueValues([])).toBe(0)
  })
  test('should return 4', () => {
    expect(countUniqueValues([-2,-1,-1,0,1])).toBe(4);
  })
})