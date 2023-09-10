// Write a function called collectStrings which
// accepts an object and returns an array of all the values in the object that have a typeof string


const collectStrings = (col) => {
  let strings = [];

  // iterate over keys
  for (let key in col) {
        // if current property is a string
        if (typeof col[key] === 'string') {
          strings.push(col[key])
        }
        if (typeof col[key] === 'object') {
          strings = strings.concat(collectStrings(col[key]))
        }
  }

  return strings;
};

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

let actual1 = collectStrings(obj) // ["foo", "bar", "baz"])

console.log(actual1);
