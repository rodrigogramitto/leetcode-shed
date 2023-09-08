// Write a recursive function called reverse
// which accepts a string and returns a new string in reverse.

function reverse(str){
  if (str.length <= 1) return str;

  return reverse(str.slice(1)) + str[0];
}

let actual1 = reverse('awesome') // 'emosewa'
let actual2 =  reverse('rithmschool') // 'loohcsmhtir'

console.log(actual1);
console.log(actual2);