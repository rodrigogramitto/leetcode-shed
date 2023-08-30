// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true
// Restrictions:

// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)

// implement frequency counter solution
// function areThereDuplicates() {
//   let counter  = {};

//   for (let i = 0; i < arguments.length; i++) {
//     let current = arguments[i];
//     if (!counter[current]) {
//       counter[current] = true;
//     } else {
//       return true;
//     }
//   }
//   return false;
// }

// implement two pointers solution
function areThereDuplicates(...args) {
  args.sort((a, b) => {
    if (a < b ) {
      return -1
    }
    if (a > b) {
      return 1
    }
    return 0;
  })

  let [start, next] = [0, 1];

  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

// let actual = areThereDuplicates(1,2,3);
// console.log(actual);

module.exports = areThereDuplicates;
