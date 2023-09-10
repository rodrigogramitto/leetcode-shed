// Write a function called stringifyNumbers
// which takes in an object and finds all of the values
// which are numbers and converts them to strings. Recursion would be a great way to solve this!

const stringifyNumbers = (col) => {

  for (var key in col) {
    // if current key is number
    if (col[key] === 'number') {
      col[key] = col[key].toString();
    } else if (col[key] === 'object' && !Array.isArray(col[key])) {
      col[key] = stringifyNumbers(col[key])
    }
  }

  return col
};


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


let actual1 = stringifyNumbers(obj)

console.log(typeof obj['data']['info'].random);
