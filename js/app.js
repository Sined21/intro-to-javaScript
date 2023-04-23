'use strict';

const calculator = {
  read() {
    this.fitstNum = +prompt('Enter the first number:', 0);
    this.secondNum = +prompt('Enter the second number:', 0);
    
    if (Number.isNaN(this.fitstNum)) this.fitstNum = 0;
    if (Number.isNaN(this.secondNum)) this.secondNum = 0;
  },
  sum() {
    return this.fitstNum + this.secondNum;
  },
  mul() {
    return this.fitstNum * this.secondNum;
  }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
