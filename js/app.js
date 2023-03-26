'use strict';

// Task 1
let result = '';

for (let i = 10; i <= 20; i++) result += `${i},`;

console.log(result);

// Task 2
let result2 = '';

for (let i = 10; i <= 20; i++) result2 += i ** 2 + ' ';

console.log(result2);

// Task 3
const MULTIPLIER = 7;
let result3 = '';

for (let i = 1; i <= 10; i++) {
    result3 += `${MULTIPLIER} * ${i} = ${MULTIPLIER * i}  \n`;
}

console.log(result3);

// Task 4
let result4 = 0;

for (let i = 1; i <= 15; i++) result4 += i;

console.log(result4);

// Task 5
let result5 = 1;

for (let i = 15; i <= 35; i++) result5 *= i;

console.log(result5);

// Task 6
let sum = 0;
let average = 0;

for (let i = 1; i <= 500; i++) {
    sum += i;
    average = sum / i;
}

console.log(average);

// Task 8
let result8 = '';

for (let i = 100; i <= 200; i++) result8 += (i % 3 === 0) ? i + ' ' : '';

console.log(result8);

// Task 9
const NUM = 12;
let result9 = '';

for (let i = 1; i <= NUM; i++) {
    if (NUM % i === 0) {
        result9 += i + ' ';
    }
}

console.log(result9);

// Task 10
let result10 = 0;

for (let i = 1; i <= NUM; i++) {
    if (NUM % i !== 0) continue;

    for (let j = 1; j <= NUM; j++) {
        if (i * j === NUM) result10 ++
    }
}

console.log(result10);

// Task 11
let result11 = 0;

for (let i = 1; i <= NUM; i++) {
    if (NUM % i !== 0) continue;

    for (let j = 1; j <= NUM; j++) {
        if (i * j === NUM) result11 += i + j;
    }
}

console.log(result11);

// Task 12
for (let i = 1; i <= 10; i++) {
    console.log(`Multiplication table by ${i}:`);
    
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}