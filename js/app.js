'use strict';

const generate = () => {
  const arr = [];

  const getNumber = () => {
    if (arr.length === 100) return NaN;

    const random = Math.floor(Math.random() * 100) + 1;

    if (arr.includes(random)) return getNumber();

    arr.push(random);

    return random;
  };

  return getNumber;
};

const generateInstance = generate();
generateInstance();
