// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

const isValid = (s) => {
  let stack = [];

  for (p of s) {
    if (p === '(' || p === '{' || p === '[') stack.push(p);

    if (p === ')' && stack[stack.length - 1] === '(') {
      stack.pop();
    } else if (p === ']' && stack[stack.length - 1] === '[') {
      stack.pop();
    } else if (p === '}' && stack[stack.length - 1] === '{') {
      stack.pop();
    }
  }


  return stack.length === 0;
};

module.exports = isValid;