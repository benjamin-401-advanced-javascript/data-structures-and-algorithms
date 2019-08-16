'use strict';

var exports = module.exports = {};

var reverseArray = (array) => {

  for (let i = 0; i < array.length / 2; i++) {
    let temp = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = temp;
  }

  return array;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log([5, 4, 3, 2, 1]);

console.log(reverseArray([1, 2]));
console.log([2, 1]);

console.log(reverseArray([]));
console.log([]);

console.log(reverseArray([89, 2354, 3546, 23, 10, -923, 823, -12]));
console.log([-12, 823, -923, 10, 23, 3546, 2354, 89]);
