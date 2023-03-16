'use strict';
// Task 1
let numOrStr = prompt('input number or string');
console.log(numOrStr)

if (numOrStr === null || numOrStr.trim() === '' || isNaN( +numOrStr )) {
    console.log('Bad value');
} else {
    console.log('OK!');
}

// Task 2
let numOrStr = prompt('input number or string');
console.log(numOrStr);

switch (Boolean(numOrStr)) {
    case null:
        console.log('вы отменили');
        break;
        
    case numOrStr?.trim() === '':
        console.log('Empty String');
        break;
        
    case isNaN(+numOrStr):
        console.log(' number is Ba_NaN');
        break;
        
    default: 
        console.log('OK!');
}