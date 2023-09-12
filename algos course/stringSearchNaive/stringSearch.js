// Search how many times a substring appears in a string

const searchString = (str, sub) => {
  let count = 0;

  for (var i = 0; i < str.length; i++) {
    let strLen = 0;
    // inner loop
    for (var j = 0; j < sub.length; j++) {
      if (str[i + j] === sub[j]) {
        strLen ++;
      }
    }
    if (strLen === sub.length) count++;
  }

  return count;
};

let actual1 = searchString('owomgwiomg', 'omg') // 2;

console.log(actual1);