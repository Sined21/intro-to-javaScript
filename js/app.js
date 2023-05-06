'use strict';

const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// Task 1
const arrPositive = arr.filter((item) => item > 0);
const arrPositiveSum = arrPositive.reduce((sum, item) => sum + item, 0);

console.log(arrPositive.length);
console.log(arrPositiveSum);

// Task 2
const minArrItem = arr.reduce((x, y) => Math.min(x, y), 0);
const minArrItemIndex = arr.indexOf(minArrItem);

console.log(minArrItem);
console.log(minArrItemIndex);

// Task 3
const maxArrItem = arr.reduce((x, y) => Math.max(x, y), 0);
const maxArrItemIndex = arr.indexOf(maxArrItem);

console.log(maxArrItem);
console.log(maxArrItemIndex);

// Task 4
const arrNegative = arr.filter((item) => item < 0).length;
console.log(arrNegative);

// Task 5
const arrOdd = arr.filter((item) => item > 0 && item % 2 !== 0);
console.log(arrOdd.length);

// Task 6
const arrEven = arr.filter((item) => item > 0 && item % 2 === 0);
console.log(arrEven.length);

// Task 7
const arrEvenSum = arrEven.reduce((sum, el) => sum + el, 0);
console.log(arrEvenSum);

// Task 8
const arrOddSum = arrOdd.reduce((sum, el) => sum + el, 0);
console.log(arrOddSum);

// Task 9
const arrMul = arr.reduce((sum, item) => sum * item);
console.log(arrMul);

// Task 10
const arrMax = arr.reduce((x, y) => Math.max(x, y), 0);
const newArr = arr.map((item) => (item === arrMax ? arrMax : 0));
console.log(newArr);
