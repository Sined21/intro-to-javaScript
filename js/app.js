'use strict';

const number = prompt('Enter the number');
const power = prompt('Enter the power to be raised');
const result = getPow(number, power);

console.log(result);

function getPow(num, pow = 1) {
    if (isNaN(num) || num === null) return 'invalid number';
    if (isNaN(pow) || pow === null) return 'invalid power';

    return Math.pow(num, pow);
}