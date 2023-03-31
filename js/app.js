'use strict';

const num = prompt('Enter the number');

function checkPrime(num) {
    if (num < 1) return NaN;
    
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return i;
    }

    return 'Number is prime';
}

console.log(checkPrime(num));