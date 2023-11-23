const isValid = require('./validParentheses.js');

describe('Should check wether or not a string of parentheses is valid or not', () => {
  test('shoudl return true if parenthesis are valid', () => {
    expect(isValid('({[]})')).toBe(true);
  })
  test('should return false if parenthesis are invalid', () => {
    expect(isValid('([})')).toBe(false);
  })
})

