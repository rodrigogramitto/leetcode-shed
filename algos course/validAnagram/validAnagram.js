
// implement using frequency counter pattern

const validAnagram = (str1, str2) => {
if (str1.length !== str2.length) {
  return false;
};

let [freq1, freq2] = [{}, {}];

for (char of str1) {
  if (!freq1[char]) {
    freq1[char] = 1;
  } else {
    freq1[char]++;
  }
};

for (char of str2) {
  if (!freq2[char]) {
    freq2[char] = 1;
  } else {
    freq2[char]++;
  }
}

// iterate over str length
for (char of str1) {
 if (!freq2[char]) {
  return false;
 }
 if (freq2[char] !== freq1[char]) {
  return false;
 }
}

return true;
}

module.exports = validAnagram;