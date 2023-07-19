'use strict';

void (function () {
  const students = [
    { name: 'John', age: 20, subject: 'Math' },
    { name: 'Alice', age: 22, subject: 'English' },
    { name: 'Bob', age: 21, subject: 'History' },
  ];

  const printGreetings = (arr) => {
    const printValue = [];

    arr.forEach(({ name, subject }) => {
      printValue.push(`Привет, ${name}! Ты изучаешь предмет ${subject}`);
    });

    return printValue.join('\n');
  };

  console.log(printGreetings(students));
})();
