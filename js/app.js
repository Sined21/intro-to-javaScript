'use strict';

(function () {
  const form = document.getElementById('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());

    form.reset();
    console.log(formValues);
  });
})();
