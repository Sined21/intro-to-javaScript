'use strict';

// Task 1
const arr1 = ['a', 'b', 'c', 'd'];
console.log(`${arr1[0]} + ${arr1[1]}, ${arr1[2]} + ${arr1[3]}`);

// Task 2
const arr2 = [2, 5, 3, 9];
const result2 = arr2[0] * arr2[1] + arr2[2] * arr2[3];
console.log(result2);

// Task 3
const arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arr3[1][0]);

// Task 4
const obj = { js: ['jQuery', 'Angular'], php: 'hello', css: 'world' };
console.log(obj.js[0]);

// Task 5
const arr5 = [];
let str = 'x';

for (let i = 0; i < 10; i++) {
  arr5.push(str);
  str += str;
}

console.log(arr5);

// Task 6
const arr6 = [];

for (let i = 1; i < 10; i++) {
  arr6.push(i.toString().repeat(i));
}

console.log(arr6);

// Task 7
const arrayFill = (value, count) => {
  const arr = [];

  for (let i = 0; i < count; i++) arr.push(value);

  return arr;
};

console.log(arrayFill('x', 5));

// Task 8
const arr8 = [5, 3, 7, 3, 9, 2, 6, 8, 3];

const result8 = (arr) => {
  let counter = 0;
  let result = 0;

  arr.reduce((sum, item) => {
    if (sum > 10) {
      result = counter;
      return;
    }
    counter++;
    return sum + item;
  }, 0);

  return result;
};

console.log(result8(arr8));

// Task 9
const arr9 = [1, 2, 3, 4, 5];
const newArr9 = [];
for (let i = arr9.length - 1; i >= 0; i--) {
  newArr9.push(arr9[i]);
}

console.log(newArr9);

// Task 10
const arr10 = [[1, 2, 3], [4, 5], [6]];
const result10 = arr10.flat(2).reduce((sum, item) => sum + item);

console.log(result10);

// Task 11
const arr11 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
const result11 = arr11.flat(3).reduce((sum, item) => sum + item);

console.log(result11);
