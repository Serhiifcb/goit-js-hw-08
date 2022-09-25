import throttle from 'lodash.throttle';
const refForm = document.querySelector('.feedback-form');
// console.log(refForm);
refForm.addEventListener('submit', handleSubmit);
const userData = {
  email: '',
  message: '',
};
function handleSubmit(event) {
  event.preventDefault();
  const inputElements = event.currentTarget.elements;
  userData.email = inputElements.email.value;
  userData.message = inputElements.message.value;
  console.log(userData);
  // event.currentTarget.reset();
}
// console.log(userData);
