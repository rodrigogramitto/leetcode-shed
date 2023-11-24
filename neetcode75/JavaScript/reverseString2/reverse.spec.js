const reverseStr = require('./reverse.js');

describe('should reverse the first k characters for every 2k characters', () => {
  test('testing with string longer than 2k', () => {
    expect(reverseStr("abcdefg", 2)).toEqual("bacdfeg")
  });
  test('testing with a string shorter or equal than 2k', () => {
    expect(reverseStr("abcd", 2)).toEqual("bacd")
  })
})