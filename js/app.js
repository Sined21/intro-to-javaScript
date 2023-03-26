'use strict';

function padString (str, length, symbol, right = true) {
    if (typeof str !== 'string') return 'invalid string value';
    if (isNaN(length)) return 'invalid string length value';
    
    const strLength = str.length;
    
    if (strLength === length) return str; 
    if (strLength > length) return str.substring(0, length);
    
    if (typeof symbol !== 'string' || symbol.length !== 1) return 'invalid symbol value';
    if (typeof right !== 'boolean') return 'invalid placement value';
    
    const symbolRepeater = symbol.repeat(length - strLength);
    
    return right ? str + symbolRepeater : symbolRepeater + str;
}

console.log(padString('Hello', 8, '*'));