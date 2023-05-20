'use strict';

(function() {
  const form = document.getElementById('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = {};

    for (let field of form) {
      if (field.name) {
        const { name, type, checked, value } = field;

        formData[name] = type === 'checkbox' ? checked : value;
      }
    }

    console.log(formData);
  });
})();
