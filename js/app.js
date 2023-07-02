'use strict';

void (function () {
  const str = 'abcccdffuhcscjs686r456';

  const uniqSymbolsCount = (str) => {
    const strMap = new Set();

    for (let i = 0; i < str.length; i++) {
      strMap.add(str[i]);
    }

    return strMap.size;
  };

  uniqSymbolsCount(str);
})();
