'use strict';

const mainFunction = (exp, mul, div, mod) => {
    const num1 = prompt('Enter the first number');
    const num2 = prompt('Enter the second number');
    exp(num1, num2);
    mul(num1, num2);
    div(num1, num2);
    mod(num1, num2);
}

const exponentiation = (a, b) => {
    const result = Math.pow(a, b);
    alert(result);
}

const multiplay = (a, b) => {
    const result = a * b;
    alert(result);
}

const division = (a, b) => {
    const result = a / b;
    alert(result);
}

const modulo = (a, b) => {
    const result = a % b;
    alert(result);
}

mainFunction(exponentiation, multiplay, division, modulo);