'use strict';

(function () {
  const generateList = (array) => {
    if (!Array.isArray(array) || !array.length) throw new Error('Invalid function argument');

    const generateListItem = (arr) => {
      const ul = document.createElement('ul');

      arr.forEach((item) => {
        const li = document.createElement('li');

        if (!Array.isArray(item)) {
          li.textContent = item;
        } else {
          const innerLi = generateListItem(item);
          li.appendChild(innerLi);
        }

        ul.appendChild(li);
      });

      return ul;
    };

    return generateListItem(array);
  };

  document.body.appendChild(
    generateList([1, 2, [1.1, 1.2, 1.3, [2.1, 2.2, 2.3]], 3]),
  );
})();
