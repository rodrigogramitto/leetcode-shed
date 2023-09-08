
// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow()  -
// do not worry about negative bases and exponents.


function power(b, e){

    // base case
    if (e === 0) {
      return 1;
    }
    return b * power(b, e - 1);
}

let actual1 = power(2,0) // 1
let actual2 = power(2,2) // 4
let actual3 = power(2,4) // 16

console.log(actual1)
console.log(actual2)
console.log(actual3)

