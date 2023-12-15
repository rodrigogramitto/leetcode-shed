// Given a string s and an integer k,
// reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left,
// reverse all of them. If there are less than 2k but greater than or equal to k characters,
// then reverse the first k characters and leave the other as original.

// Example 1:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"

// I: String s and int k
// O: String where first k char for every 2k char are reversed
// C: N/A
// E: If less than k chars left reverse all, if less than 2k but more than or equal k reverse first k

// Strategy: split string into individual chars,
// initiate a counter, a result string, and an empty array to hold k
// itereate over split, anf unshift elements into k array, increment counter for each loop
// if counter equals 2k reverse k and put into result
// if k is larger than split reverse split and put into result
// else if less than 2k chars left but more than or equal k reverse first k and put into result

// var reverseStr = function(s, k) {
//   let split = s.split('');
//   let [c, result, toFlip] = [0, '', []];

//   for (char of s) {
//     toFlip.push(split.shift());
//     if (toFlip.length === k*2) {
//         result += toFlip.slice(0, k).reverse().join('');
//         result += toFlip.slice(k).join('');
//         toFlip = [];
//     } else if (k > split.length) {
//       result += split.reverse().join('');
//       break;
//     } else if (split.length < 2 * k && split.length >= k) {
//       result += split.slice(0, k).reverse().join('');
//       result += split.slice(k).join('');
//     }
//   }
//   return result;
// };

var reverseStr = function(s, k) {
  let split = s.split('');
  let result = '';

  while (split.length > 0) {
    let toFlip = split.splice(0, k);

    if (toFlip.length === k) {
      result += toFlip.reverse().join('');
      result += split.splice(0, k).join('');
    } else {
      result += toFlip.reverse().join('');
    }
  }

  return result;
};

let actual1 = reverseStr("abcdefg", 2); //"bacdfeg"
console.log(actual1)
module.exports = reverseStr;