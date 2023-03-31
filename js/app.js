'use strict';

const num = prompt('Enter the number');

function checkPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    
    return num > 1;
}

console.log(checkPrime(num));