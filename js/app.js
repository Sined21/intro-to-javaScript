'use strict';

void (function () {
  const form = document.getElementById('todo-form');
  const formFields = Array.from(form.querySelectorAll('input:not([type=reset]), textarea'));
  const todoContainer = document.getElementById('todo-items');
  const FORM_DATA_KEY = 'formData';
  const ID_ATTR = 'data-id';
  let currentId = 1;

  const createTemplate = ({ title, description, id }) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('col-4');
    wrapper.setAttribute(ID_ATTR, id);

    wrapper.innerHTML = `
            <div class='taskWrapper'>
              <div class='taskHeading'>${title}</div>
              <div class='taskDescription'>${description}</div>
              <button class='mt-3 remove-todo btn btn-danger btn-sm'>
                <i class='bi bi-trash'></i>
                <span>Remove</span>
              </button>
            </div>
    `;

    return wrapper;
  };

  const renderTemplate = (el) => {
    todoContainer.prepend(el);
  };

  const getTodoItems = () => {
    return JSON.parse(localStorage.getItem(FORM_DATA_KEY)) || [];
  };

  const saveToDoItem = (data) => {
    const existingData = getTodoItems();
    const cloneData = { ...data, id: currentId };
    existingData.push(cloneData);
    localStorage.setItem(FORM_DATA_KEY, JSON.stringify(existingData));

    currentId += 1;

    return getTodoItems().at(-1);
  };

  const removeTodoItem = (id) => {
    const existingData = getTodoItems();
    const index = existingData.findIndex((item) => item.id === id);
    
    existingData.splice(index, 1);
    localStorage.setItem(FORM_DATA_KEY, JSON.stringify(existingData));
  };
  
  const removeDOMTodoItem = (id) => {
    todoContainer.querySelector(`[${ID_ATTR}="${id}"]`).remove();
  }

  const loadToDoItems = () => {
    const existingData = getTodoItems();

    if (!existingData.length) return;

    currentId = Number(existingData.at(-1).id + 1);
    existingData.forEach((item) => {
      renderTemplate(createTemplate(item));
    });

    document.removeEventListener('DOMContentLoaded', loadToDoItems);
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();

    const formData = formFields.reduce((obj, { name, value }) => {
      obj[name] = value;
      return obj;
    }, {});

    const savedData = saveToDoItem(formData);
    renderTemplate(createTemplate(savedData));
    form.reset();
  });

  todoContainer.addEventListener('click', (event) => {
    event.stopPropagation();

    if (!event.target.closest('.remove-todo')) return;

    const todoItemId = Number(event.target.closest(`[${ID_ATTR}]`).getAttribute(ID_ATTR));
    removeTodoItem(todoItemId);
    removeDOMTodoItem(todoItemId);
  });

  document.addEventListener('DOMContentLoaded', loadToDoItems);
})();
