'use strict';

void (function () {
  const goods = [
    ['jacket', 40],
    ['sweater', 25],
    ['pants', 25],
    ['hoodie', 20],
    ['t-shirt', 15],
    ['socks', 5],
    ['briefs', 8],
  ];

  const goodsTotal = (goods) => {
    let total = 0;
    const goodsMap = new Map();
    goods.forEach((item) => goodsMap.set(item[0], item[1]));

    for (const value of goodsMap.values()) {
      total += value;
    }

    return total;
  };

  goodsTotal(goods);
})();
