
// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers,
//find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(int1, int2){

let [str1, str2] = [`${int1}`, `${int2}`];
let [f1, f2] = [{}, {}];

if (str1.length !== str2.length) {
  return false;
};

for (let i = 0; i < str1.length; i++) {
  let [k1, k2] = [str1[i], str2[i]]
  f1[k1] ? f1[k1]++ : f1[k1] = 1;
  f2[k2] ? f2[k2]++ : f2[k2] = 1;
};
for (var key in f1) {
  if (f1[key] !== f2[key]) {
    return false;
  }
}

return true;
}

module.exports = sameFrequency;
