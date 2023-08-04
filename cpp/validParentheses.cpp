// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

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


// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

class Solution {
public:
    bool isValid(string s) {
        // define stack
        stack<char> opening;

        // iterate over input string
        for (int i = 0; i < s.length(); i++) {
            // if current char is opening bracket
            if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
                opening.push(s[i]);
            }

            // if current char is closing bracket
            if (s[i] == ')' || s[i] == '}' || s[i] == ']') {
                // if current char matches last element in stack
                if (opening.empty()) {
                    return false;
                }
                char last = opening.top();
                if ((last == '(' && s[i] == ')') || (last == '{' && s[i] == '}') || (last == '[' && s[i] == ']')) {
                    opening.pop();
                } else {
                    return false;
                }
            }
        }

        // return if stack length is zero
        return opening.empty();
    }
};

