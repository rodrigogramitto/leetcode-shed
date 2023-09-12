const linearSearch = require('./linearSearch.js');

describe('Should search for an element', () => {
  test('should return index if element is found', () => {
    expect(linearSearch([10, 15, 20, 25, 30], 15)).toBe(1);
    expect(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)).toBe(5);
    expect(linearSearch([100], 100)).toBe(0);
  });
  test('should return -1 if element is not found', () => {
    expect(linearSearch([1,2,3,4,5], 6)).toBe(-1);
    expect(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)).toBe(-1);
    expect(linearSearch([100], 200)).toBe(-1);
  })
})


