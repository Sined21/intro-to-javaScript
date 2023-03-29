'use strict';
const calcProducts = (liters, count, weight, price) => {
    const totalWeight = Math.ceil(liters * count * weight  / 1000);
    const totalPrice = totalWeight * price;
    return `Итого: ${totalPrice}грн для ${liters} литров борща`;
}

console.log(calcProducts(48, 4, 75, 13));