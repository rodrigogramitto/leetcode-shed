// Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum (col) {
  let sum = 0;

  for (let key in col) {
        if (typeof col[key] === 'number' && col[key] % 2 === 0) {
          sum += col[key];
        }
    if (typeof col[key] === 'object') {
      sum += nestedEvenSum(col[key]);
    }
  }
  return sum;
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

let actual1 = nestedEvenSum(obj1); // 6
let actual2  = nestedEvenSum(obj2); // 10

console.log('actual1', actual1);
console.log('actual2', actual2);