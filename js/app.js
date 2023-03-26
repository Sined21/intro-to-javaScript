'use strict';

const arr = [1, 2, 3, -1, -2, -3];

const getPositiveNumbers = (arr) => {
    if (!Array.isArray(arr)) return null;
    if (arr.length === 0) return 'Array is empty';
    
    const sortedArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) sortedArray.push(arr[i]);
    }

    return (sortedArray.length !== 0) ? sortedArray : null;
}

console.log(getPositiveNumbers(arr));