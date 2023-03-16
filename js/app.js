'use strict';

let a = +prompt('Enter first number');
let b = +prompt('Enter second number');

// 1
const result1 = (a === 0) ? 'true' : 'false';
alert(result1);

// 2
const result2 = (a > 0) ? 'true' : 'false';
alert(result2);

// 3
const result3 = (a < 0) ? 'true' : 'false';
alert(result3);

// 4
const result4 = (a >= 0) ? 'true' : 'false';
alert(result4);

// 5
const result5 = (a <= 0) ? 'true' : 'false';
alert(result5);

// 6
const result6 = (a !== 0) ? 'true' : 'false';
alert(result6);

// 7
const result7 = (a == 'test') ? 'true' : 'false';
alert(result7);

// 8
const result8 = (a === '1') ? 'true' : 'false';
alert(result8);

// 9
const result9 = (a > 0 && a < 5) ? 'true' : 'false';
alert(result9);

// 10
const result10 = (a === 0 || a === 2) ? a+=7 : a/=10;
alert(result10);

// 11
const result11 = (a <= 1 && b >= 3) ? a + b : a - b;
alert(result11);

// 12
const result12 = ((a > 2 && a < 11) || (b >= 6 && b < 14)) ? 'true' : 'false';
alert(result12);

// 13
const num = +prompt('enter a number from 1 to 4');
let result = null;

switch (num) {
    case 1:
        result = 'Winter';
        break;
        
    case 2:
        result = 'Spring';
        break;
        
    case 3:
        result = 'Summer';
        break;
        
    case 4:
        result = 'Autumn';
        break;
        
    default: alert('Invalid value entered');
}

alert(result);