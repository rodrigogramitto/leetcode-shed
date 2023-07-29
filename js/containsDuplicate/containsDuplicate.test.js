const containsDuplicate = require('./containsDuplicate.js');

describe('Checks wheter or not array contains duplicate', () => {
  test('it should return true if array contains duplicate', () => {
    expect(containsDuplicate([1,2,3,1])).toBe(true)
  })
  test('it should return false if array does not contain duplicate', () => {
    expect(containsDuplicate([1,2,3,4])).toBe(false)
  })
});



