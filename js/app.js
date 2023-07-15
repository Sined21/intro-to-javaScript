'use strict';

void (function () {
  const studentIvan = { name: 'Иван Иванов' };
  const gradesIvan = { math: 90, fiz: 85, eng: 95 };

  const saveGrades = (student, grades) => {
    const gradesMap = new WeakMap();
    gradesMap.set(student, grades);
  };

  saveGrades(studentIvan, gradesIvan);
})();
