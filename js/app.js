'use strict';

const list = document.getElementById('ulId');
const listItems = list.getElementsByTagName('li');

// Task 1
let itemCount = 0;
for (const item of listItems) {
  itemCount++;
}

console.log(itemCount);

// Task 1 (v2)
console.log(listItems.length);

// Task 2
const arrOfInnerText = [];

for (const item of listItems) {
  arrOfInnerText.push(item.innerText);
}

console.log(arrOfInnerText);
