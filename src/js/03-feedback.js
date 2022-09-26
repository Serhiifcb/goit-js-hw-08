import throttle from 'lodash.throttle';
const refForm = document.querySelector('.feedback-form');
const refFormEmail = document.querySelector('.feedback-form input');
const refFormMessage = document.querySelector('.feedback-form textarea');
const currentMessage = 'feedback-form-state';
let userData = {
  email: '',
  message: '',
};
if (JSON.parse(localStorage.getItem(currentMessage))) {
  userData = JSON.parse(localStorage.getItem(currentMessage));
}
refFormEmail.value = userData.email;

refFormMessage.value = userData.message;
refForm.addEventListener('submit', handleSubmit);
refFormEmail.addEventListener('input', throttle(saveEmailLocalStorage, 500));
refFormMessage.addEventListener(
  'input',
  throttle(saveMessageLocalStorage, 500)
);
function saveEmailLocalStorage(ev) {
  userData.email = ev.target.value;
  localStorage.setItem(currentMessage, JSON.stringify(userData));
}
function saveMessageLocalStorage(ev) {
  userData.message = ev.target.value;
  localStorage.setItem(currentMessage, JSON.stringify(userData));
}
function handleSubmit(event) {
  event.preventDefault();
  const inputElements = event.currentTarget.elements;
  userData.email = inputElements.email.value;
  userData.message = inputElements.message.value;
  console.log(userData);
  localStorage.removeItem(currentMessage);
  event.currentTarget.reset();
}
