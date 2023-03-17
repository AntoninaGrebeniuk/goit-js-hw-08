import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';
const savedData = localStorage.getItem(STORAGE_KEY);
const parseData = JSON.parse(savedData);
const formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));

fillTextarea();

function onTextareaInput(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  if (email.value === '' || message.value === '') {
    return alert('Все поля должны быть заполнены.');
  }

  console.log(formData);
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function fillTextarea() {
  if (savedData) {
    parseData.email === undefined
      ? (email.value = '')
      : (email.value = parseData.email);
    parseData.message === undefined
      ? (message.value = '')
      : (message.value = parseData.message);
  }
}
