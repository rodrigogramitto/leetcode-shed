const sameFrequency = require('./sameFrequency.js');

describe('Must have same frequency of digits', () => {
  test('Should return true for numbers with same frequency of digits', () => {
    expect(sameFrequency(182,281)).toBe(true)
    expect(sameFrequency(3589578, 5879385)).toBe(true)
  });
  test('Should return false with numbers without same frequency of digits', () => {
    expect(sameFrequency(34,14)).toBe(false)
    expect(sameFrequency(22, 222)).toBe(false);
  })
})