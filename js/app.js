'use strict';

// Task #1
const getFactorial = (num) => {
  if (num === 1 || num === 0) {
    return 1;
  }

  return num * getFactorial(num - 1);
};

console.log(getFactorial(5));
// Task #2

// Task #3
