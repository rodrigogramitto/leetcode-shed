// Binary Search Exercise
// Write a function called binarySearch which accepts a sorted array
// and a value and returns the index at which the value exists. Otherwise, return -1.


const binarySearch = (sortedArr, target) => {

  let [left, right] = [0, sortedArr.length - 1];
  let m = Math.floor((left + right) / 2);

  while (left <= right) {

    if (target === sortedArr[m]) {
      return m;
    };

    if (sortedArr[m] < target) {
      left = m + 1;
    } else {
      right = m - 1;
    }
    m = Math.floor((left + right) / 2)
  }

  return -1;
}

module.exports = binarySearch;

let actual1 = binarySearch([1,2,3,4,5],2) // 1

console.log(actual1);

