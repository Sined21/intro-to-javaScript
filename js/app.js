'use strict';

void (function () {
  const API_URL = 'https://jsonplaceholder.typicode.com';
  const SEARCH_CONTENT_SELECTOR = 'data-search-content';
  const SEARCH_FORM_SELECTOR = 'data-search-form';
  const SEARCH_COMMENTS_SELECTOR = 'data-search-comments';

  const searchContent = document.querySelector(`[${SEARCH_CONTENT_SELECTOR}]`);
  const searchForm = document.querySelector(`[${SEARCH_FORM_SELECTOR}]`);

  const createPost = ({ id, title, body }) => {
    const wrapper = document.createElement('div');

    wrapper.innerHTML = `
            <div class='card mb-3'>
              <div class='card-body'>
                <h5 class='card-title'>${title}</h5>
                <p class='card-text'>${body}</p>
              </div>
            </div>
            <button class='btn btn-primary' type='button' ${SEARCH_COMMENTS_SELECTOR}='${id}'>Load comments</button>
    `;

    return wrapper;
  };

  const createComments = (comments) => {
    const wrapper = document.createElement('ul');
    wrapper.classList.add('list-group');

    comments.forEach(({ body }) => {
      wrapper.insertAdjacentHTML(
        'beforeend',
        `<li class='list-group-item'>${body}</li>`,
      );
    });

    return wrapper;
  };

  const renderTemplate = (el) => {
    searchContent.append(el);
  };

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = event.target.querySelector('input').value;

    if (isNaN(formData) || +formData < 1 || +formData > 100) {
      event.target.reset();
      return alert('Valid value: number from 1 to 100');
    }

    fetch(`${API_URL}/posts/${formData}`)
      .then((response) => response.json())
      .then((json) => {
        searchContent.innerHTML = '';
        renderTemplate(createPost(json));
      })
      .catch((error) => alert(error.message));

    event.target.reset();
  });

  document.addEventListener('click', (event) => {
    event.stopPropagation();

    const element = event.target;

    if (!element.closest(`[${SEARCH_COMMENTS_SELECTOR}]`)) return;

    const postId = element.getAttribute(SEARCH_COMMENTS_SELECTOR);

    fetch(`${API_URL}/comments?postId=${postId}`)
      .then((response) => response.json())
      .then((json) => {
        renderTemplate(createComments(json));
        element.remove();
      })
      .catch((error) => alert(error.message));
  });
})();
