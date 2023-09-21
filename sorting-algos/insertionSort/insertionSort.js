// Builds up the sort by gradually creating a larger left half which is always sorted.

// Start by picking the second element of the  array
// Compare the second element with the one before it and swap it if necessary
// Continue to the next element and if it is in the incorrect order,
// iterate through the sorted portion to place the element in the correct place.
// Repeat until the array is sorted

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function insertionSort(arr) {

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && current < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    };
    arr[j + 1] = current;
  }

  return arr;
};

let actual1 = insertionSort([91,2,123,11,3,5,9,10,7,4]);

console.log(actual1);
