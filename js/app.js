'use strict';
// Task 1
const x = 10;
const y = 7;

alert (x > y ? 'x is greater than y': 'x is not greater than y');

// Task 2
const num = prompt('Enter the number');

if (num % 2 === 0) {
    alert(`Number ${num} is even`);
} else {
    alert(`Number ${num} odd`);
}

// Task 3
const integer = prompt('Enter an integer');
const sign = (+integer >= 0) ? 'positive' : 'negative';
let length;

switch (integer.length) {
    case 1:
        length = 'one-digit';
        break;

    case 2:
        length = 'two-digit';
        break;

    default:
        length = 'three-digit or more';
}

alert(`Number ${integer} ${length} ${sign}`);

// Task 4
const a = +prompt('Enter the first number:');
const b = +prompt('Enter the second number:');
const c = +prompt('Enter the third number:');

if (a >= b && b >= c) {
    alert(`The biggest number - ${a}`);
} else if (b >= a && a >= c) {
    alert(`The biggest number - ${b}`);
} else {
    alert(`The biggest number - ${c}`);
}

// Task 5
const a = +prompt('Enter the first number:');
const b = +prompt('Enter the second number:');
const c = +prompt('Enter the third number:');

if ((a + b > c) && (a + c > b) && (b + c > a)) {
    alert('triangle possible');
} else {
    alert('triangle impossible');
}