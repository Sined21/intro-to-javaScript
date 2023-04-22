'use strict';

// Task 1
const arr1 = [1, 2, 3];
const arr1_2 = [4, 5, 6];
const arr1_3 = arr1.concat(arr1_2);

// Task 2
const arr2 = [1, 2, 3];
arr2.reverse();

// Task 3
const arr3 = [1, 2, 3];
arr3.push(4, 5, 6);

// Task 4
const arr4 = [1, 2, 3];
arr4.unshift(4, 5, 6);

// Task 5
const arr5 = ['js', 'css', 'jq'];
console.log(arr5[0]);

// Task 6
const arr6 = ['js', 'css', 'jq'];
console.log(arr6.at(-1));

// Task 7
const arr7 = [1, 2, 3, 4, 5];
const arr7_1 = arr7.slice(0, 3);

// Task 8
const arr8 = [1, 2, 3, 4, 5];
const arr8_1 = arr8.slice(3);

// Task 9
const arr9 = [1, 2, 3, 4, 5];
arr9.splice(1, 2);

// Task 10
const arr10 = [1, 2, 3, 4, 5];
const arr10_1 = arr10.slice(1, 4);

// Task 11
const arr11 = [1, 2, 3, 4, 5];
arr11.splice(2, 0, 'a', 'b', 'c');

// Task 12
const arr12 = [1, 2, 3, 4, 5];
arr12.splice(1, 0, 'a', 'b');
arr12.splice(-1, 0, 'c');
arr12.splice(arr12.length, 0, 'e');

// Task 13
const arr13 = [3, 4, 1, 2, 7];
arr13.sort((a, b) => a - b);

// Task 14
const arr14 = [5, 6, 7, 8, 9];
const arr14_1 = arr14.reduce((sum, item) => sum + item);

// Task 15
const arr15 = [5, 6, 7, 8, 9];
const arr15_1 = arr15.map((item) => item * item);

// Task 16
const arr16 = [1, -3, 5, 6, -7, 8, 9, -11];
const arr16_1 = arr16.filter((item) => item < 0);

// Task 17
const arr17 = [1, -3, 5, 6, -7, 8, 9, -11];
const arr17_1 = arr17.filter((item) => item > 0);

// Task 18
const arr18 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const arr18_1 = arr18.filter((word) => word.length > 5);

// Task 19
const arr19 = [1, 2, [3, 4], 5, [6, 7]];
const arr19_1 = arr19.filter((item) => Array.isArray(item));

// Task 20
const arr20 = [5, -3, 6, -5, 0, -7, 8, 9];
const arr20_1 = arr20.filter((item) => item < 0).length;
