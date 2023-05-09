'use strict';

(function () {
  const ul = document.getElementById('ulId');
  const li = ul.querySelectorAll('li');
  const attributeList = ul.attributes;
  const NAME = 'Denys';

  // Task 1
  li.forEach((el) => console.log(el));

  // Task 2
  const attributeValues = [];

  for (let attribute of attributeList) {
    attributeValues.push(attribute.value);
  }

  console.log(attributeValues);

  // Task 3
  const attributeNames = [];

  for (let attribute of attributeList) {
    attributeNames.push(attribute.name);
  }

  console.log(attributeNames);

  // Task 4
  ul.lastElementChild.textContent = `Hello my name is ${NAME}`;

  // Task 5
  ul.firstElementChild.setAttribute('data-my-name', NAME);

  // Task 6
  ul.removeAttribute('data-dog-tail');
})();
