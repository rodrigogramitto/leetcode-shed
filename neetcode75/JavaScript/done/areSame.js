

function comp(array1, array2){
  if (!array2 || !array1 || array1.length !== array2.length) return false;
  let sorted1 = array1.sort((a, b) => a - b);
  let sorted2 = array2.sort((a, b) => a - b);

  for (let i = 0; i < sorted1.length; i++) {
    var isSquared =  Math.pow(sorted1[i], 2) === sorted2[i];
    if (!isSquared) return false;
  }

  return true;
}

console.log(comp([2,2,3], [4,9,9]))