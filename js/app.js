'use strict';

const mathOperations = prompt('What do you want to do (add, sub, mult or div)?');
const firstOperand = +prompt('First operand:');
const secondOperand = +prompt('Second operand:');

if (mathOperations == 'add') {
    alert(addition(firstOperand, secondOperand));
} else if (mathOperations == 'sub') {
    alert(subtraction(firstOperand, secondOperand));
} else if (mathOperations == 'mult') {
    alert(multiplication(firstOperand, secondOperand));
} else if (mathOperations == 'div') {
    alert(division(firstOperand, secondOperand));
} else {
    alert('Please enter: "add", "sub", "mult" or "div" in the first step');
}

function addition (a, b) {
    const sum = a + b;
    return (`${a} + ${b} = ${sum}`);
};

function subtraction (a, b) {
    const sum = a - b;
    return (`${a} - ${b} = ${sum}`);
};

function multiplication (a, b) {
    const sum = a * b;
    return (`${a} * ${b} = ${sum}`);
};

function division (a, b) {
    const sum = a / b;
    return (`${a} / ${b} = ${sum}`);
};