const maxArea = require('./maxArea.js');

describe('should calculate max area in array', () => {
  test('shoulr return 49'. () => {
    expect(maxArea([1,8,6,2,5,4,8,3,7])).toBe(49);
  });
  test('should return 1', () => {
    expect(maxArea([1,1])).toBe(1);
  })
})