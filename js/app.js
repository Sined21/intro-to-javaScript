'use strict';

// Task #1 
const user = {};

user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

// Task #2
// Yes, can be changed

// Task #3
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sumSalaries(value) {
    let sum = null;
    
    for (let item of Object.values(value)) {
        sum += item;
    }
    
    return sum;
}

alert(sumSalaries(salaries));