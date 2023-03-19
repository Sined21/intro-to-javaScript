'use strict';
const a = 4;
const b = 9;
const r = 10;

const calc = (r >= Math.sqrt(a ** 2 + b ** 2)) ? 'point inside a circle' : 'point outside the circle';
alert(calc);