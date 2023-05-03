'use strict';

const arr = [5, 1, 2, 3, 7, 4, 5, 1];

const indexOf = (arr, item, from = 0) => {
  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) return i;
  }
  return -1;
};

console.log(indexOf(arr, 5));

const lastIndexOf = (arr, item, from = 0) => {
  for (let i = arr.length - 1 - from; i >= 0; i--) {
    if (arr[i] === item) {
      return i;
    }
  }
  return -1;
};

console.log(lastIndexOf(arr, 5));

const find = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
};

console.log(find(arr, (item) => item === 4));

const findIndex = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return i;
    }
  }
  return -1;
};

console.log(findIndex(arr, (item) => item === 4));

const includes = (arr, item, from = 0) => {
  for (let i = arr.length - 1 - from; i >= 0; i--) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
};

console.log(includes(arr, 5));

const every = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i])) {
      return false;
    }
  }
  return true;
};

console.log(every(arr, (item) => item < 10));

const some = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return true;
    }
  }
  return false;
};

console.log(some(arr, (item) => item > 6));
