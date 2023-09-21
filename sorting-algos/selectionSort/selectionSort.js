// Store the first element as the smallest value
// Compare element to the next in the array until you find a smaller number
// if a smaller number is found designate that number as the new minimum
// if the min is not the element you started with swap the two values
// repeat until array is sorted

function selectionSort(arr) {

  for (var i = 0; i < arr.length; i++) {
    let min = i;
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
    };
    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
};

let actual1 = selectionSort([2,4,11,14,21,1]); // [1,2,4,11,14,21];
console.log(actual1);