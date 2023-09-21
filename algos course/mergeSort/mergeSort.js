
// Implement merge function, accepts two sorted arrays

function merge(arr1, arr2) {
  let result = [];
  let [i, j] = [0, 0];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

function mergeSort(arr) {
let len = arr.length
let half = Math.floor(len / 2);

if (len <= 1) {
  return arr;
}
return merge(mergeSort(arr.slice(0, half)), mergeSort(arr.slice(half, len)))
}


let sorted = mergeSort([8,6,7,5,3,0,9])
console.log(sorted);