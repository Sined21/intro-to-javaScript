'use strict';

const mainFunction = (callback) => {
    const num1 = prompt('Enter the first number');
    const num2 = prompt('Enter the second number');
    return callback(num1, num2);
}

const exponentiation = (a, b) => {
    return Math.pow(a, b);
}

const multiplay = (a, b) => {
    return a * b;
}

const division = (a, b) => {
    return a / b;
}

const modulo = (a, b) => {
    return a % b;
}

alert(mainFunction(multiplay));