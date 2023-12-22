

const productOfArray = (nums) => {
  const result = [];
  let [prefix, postfix] = [1,1];

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    postfix *= nums[i + 1];
    result[i] *= postfix;
  }
  return result;
};


let actual1 = productOfArray([1,2,3,4]) // expect [24,12,8,6];
console.log(actual1);