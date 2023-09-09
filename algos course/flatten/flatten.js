// Write a recursive function called flatten which accepts
// an array of arrays and returns a new array with all values flattened.

function flatten(col){
   let results = [];

   for (let i = 0; i < col.length; i++) {
      if (!Array.isArray(col[i])) {
        results.push(col[i])
      } else {
        results = results.concat(flatten(col[i]))
      }
   }
  return results;
}

let actual1 =  flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
console.log('actual1', actual1);

let actual2 =  flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
console.log('actual2', actual2);
let actual3 = flatten([[1],[2],[3]]) // [1,2,3]
console.log('actual3', actual3);
let actual4 = flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

console.log('actual4', actual4);