'use strict';

(function () {
  const form = document.getElementById('form');
  const formDataKey = 'formData';

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = {};

    for (let field of form) {
      if (!field.name) break;

      const { name, type, checked, value } = field;

      formData[name] = type === 'checkbox' ? checked : value;
    }

    localStorage.setItem(formDataKey, JSON.stringify(formData));
    form.reset();
  });

  const getFormData = () => {
    const formData = localStorage.getItem(formDataKey);

    if (!formData) return;

    const formDataParse = JSON.parse(formData);

    for (let field of form) field.value = formDataParse[field.name];

    document.removeEventListener('DOMContentLoaded', getFormData);
  };

  document.addEventListener('DOMContentLoaded', getFormData);
})();
