const topKFrequent = require('./frequentElements.js');


describe('Returns k most frequent elements', () => {
  test('it shoudl return array containing most frequent elements', () => {
    expect(topKFrequent([1,1,1,2,2,3], 2)).toEqual([1, 2]);
  })
  test('it should work for arrays with one element', () => {
    expect(topKFrequent([1], 1)).toEqual([1]);
  })
});