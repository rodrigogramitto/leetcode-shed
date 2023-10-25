

const getDigit = (num, place) => {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

const digitCount = (num) => {
  return num.toString().length;
}

const mostDigits = (nums) => {
  let max = 0;
  for (num of nums) {
    max = Math.max(max, digitCount(num));
  }
  return max;
}

const sort = (nums) => {
  let digits = mostDigits(nums);
  for (let k = 0; k < digits; k++) {
    let digitBuckets = Array.from({length: 10}, () => []);
    for (let i = 0; i < nums.length; i ++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

let num = 5132;
let nums = [1, 31, 4213, 21412,12,3,213,112,1401,1230];

let actual = sort(nums);
console.log(actual);

