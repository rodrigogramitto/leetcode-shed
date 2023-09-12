const binarySearch = require('./binarySearch.js');


describe('algorithm should search for target in log time', () => {
  test('should return index if element is found', () => {
    expect(binarySearch([1,2,3,4,5],2)).toBe(1);
    expect(binarySearch([1,2,3,4,5],3)).toBe(2);
  })
  test('should return -1 if element is not found', () => {
    expect( binarySearch([
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
      40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100)).toBe(-1);
      expect(binarySearch([1,2,3,4,5],6)).toBe(-1);
  })
})