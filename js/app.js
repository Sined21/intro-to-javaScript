'use strict';

(function () {
  // Task #1
  const getFactorial = (num) => {
    if (num === 0 || num === 1) return 1;

    return num * getFactorial(num - 1);
  };

  console.log(getFactorial(5));

  // Task #2
  const pow = (num, degree) => {
    if (degree === 1) return num;

    return num * pow(num, --degree);
  };

  console.log(pow(2, 3));

  // Task #3
  const sum = (a, b) => {
    if (b === 0) return a;

    return sum(a + 1, b - 1);
  };

  console.log(sum(10, 2));
})();
