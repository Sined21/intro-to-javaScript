'use strict';

(function () {
  const createTable = () => {
    const table = document.createElement('table');
    let indexNum = 1;

    for (let i = 1; i <= 10; i++) {
      const tableRow = document.createElement('tr');

      for (let j = 1; j <= 10; j++) {
        const tableData = document.createElement('td');
        tableData.textContent = indexNum;
        indexNum++;

        tableRow.appendChild(tableData);
      }

      table.appendChild(tableRow);
    }

    return table;
  };

  document.body.appendChild(createTable());
})();
