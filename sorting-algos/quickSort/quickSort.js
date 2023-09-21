

// Pivot helper arranges elements in array on either side of the Pivot
// Given an array it should designate an element as pivot, and all values greater than
// are moved to the right of the pivot.
// The order of the elements on either side doesn't matter
// the helper should do this in place
// when complete should return the index of the pivot

function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function pivotHelper(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let pIdx = start;
  for (let i = start + 1; i <= end; i++){
    if (arr[i] < pivot) {
      pIdx++;
      swap(arr, i, pIdx)
    }
  }
  swap(arr, start, pIdx);
  return pIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivotHelper(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right)
  }
  return arr;
}

let actual = quickSort([4,3,2,1,66,22,9]);

console.log(actual);
