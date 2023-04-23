'use strict';

const getSum = () => {
  let accum = 0;

  return (num) => {
    accum += num;
    return accum;
  };
};

const sum = getSum();

sum(3);
sum(5);
sum(20);
