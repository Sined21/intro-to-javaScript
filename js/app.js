'use strict';

(function () {
  const arr = [1, 2, 3, 4, [5, 6], [7, 8, [10, 2, 22, 43]]];

  const getFlat = (...arg) => {
    if (arg.length !== 1) {
      throw new Error('Function accepts only 1 argument, too much arguments provided');
    }

    const [arr] = arg;
    const arrResult = [];

    (function flat(arr) {
      arr.forEach((item) => {
        Array.isArray(item) ? flat(item) : arrResult.push(item);
      });
    })(arr);

    return arrResult;
  };

  console.log(getFlat(arr));
})();
