const isValid = require('./validParentheses.js');

describe('Checks if string of parentheses is valid', () => {
  test('should return true if string is valid', () => {
    expect(isValid(`()[]{}`)).toBe(true);
    expect(isValid("()")).toBe(true);
  });

  test('should return false if string is invalid', () => {
    expect(isValid("(})")).toBe(false);
    expect(isValid("){")).toBe(false);
  });
});