'use strict';

const A = Number(prompt('Enter first number: '));
const B = Number(prompt('Enter second number: '));

addition(A, B);
subtraction(A, B);
multiplication(A, B);
division(A, B);

function addition (a, b) {
    const CALC = a + b;
    console.log(`${a} + ${b} = ${CALC}`);
};

function subtraction (a, b) {
    const CALC = a - b;
    console.log(`${a} - ${b} = ${CALC}`);
};

function multiplication (a, b) {
    const CALC = a * b;
    console.log(`${a} * ${b} = ${CALC}`);
};

function division (a, b) {
    const CALC = a / b;
    console.log(`${a} / ${b} = ${CALC}`);
};
