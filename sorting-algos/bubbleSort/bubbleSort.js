
const bubbleSort = (arr) => {

  // iterate through array in reverse
  for (var i = arr.length - 1; i >= 0; i--) {
    for (var j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        Swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

const Swap = (arr, i1, i2) => {
  let temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}

let actual1 = bubbleSort([4,9,1,11,231,401,12432,123,12,432,2,12,3,56,8,5,3,9]);

console.log(actual1);



