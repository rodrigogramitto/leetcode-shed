const productOfArrayExceptSelf = require('./productOfArray.js');

describe('Should return an array such that, answer[i] is equal to the product of all elements of array except nums[i]', () => {
  test('should return products',  () => {
    expect(productOfArrayExceptSelf([1,2,3,4])).toEqual([24,12,8,6]);
  });
  test('should return products', () => {
    expect(productOfArrayExceptSelf([-1,-1,0,-3,-3])).toEqual([0,0,9,0,0]);
  })
})