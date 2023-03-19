'use strict';
const number = +prompt('Enter the number');

if (isNaN(+number) || number === null) {
    alert('Entered invalid value');
} else {
    let label;
    
    if (number >= 11 && number < 21 ) {
        label = 'лет';
    } else {
        switch (number % 10) {
            case 1:
                label = 'год';
                break;

            case 2:
            case 3:
            case 4:
                label = 'года';
                break;

            default:
                label = 'лет';
        }
    }
    
    alert(`${number} ${label}`);
}