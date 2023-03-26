'use strict';
const calcProducts = (litersCount) => {
    if (typeof litersCount !== 'number' || !isFinite(litersCount)) return 'invalid value';
    
    const COUNT = 4;
    const WEIGHT = 0.75;
    const PRICE = 13;
    const totalSum = Math.ceil(litersCount * COUNT * WEIGHT * PRICE);
    
    return `Итого: ${totalSum}грн за ${litersCount}кг`;
}

console.log(calcProducts(2));