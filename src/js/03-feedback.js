import throttle from 'lodash.throttle';
  const formEl = document.querySelector('.feedback-form');
  const result = {};
  const emailEl = document.querySelector('[name="email"]');
  const messageEl = document.querySelector('[name="message"]');
  let jsonParse = JSON.parse(localStorage.getItem('feedback-form-state'));
  for (let key in jsonParse) {
    result[key] = jsonParse[key];
  }
  if (jsonParse && jsonParse.message !== undefined) {
    messageEl.value = jsonParse.message;
  }
  if (jsonParse && jsonParse.email !== undefined) {
    emailEl.value = jsonParse.email;
  }
  function setLocal(){
    result[emailEl.name] = emailEl.value
    result[messageEl.name] = messageEl.value
    localStorage.setItem('feedback-form-state', JSON.stringify(result))
  }
    formEl.addEventListener('input',throttle(setLocal, 500));
  formEl.addEventListener('submit', e => {
    if(emailEl.value === ""|| messageEl.value === ""){
     return alert("Введіть значення")
    }
    e.preventDefault();
    localStorage.removeItem('feedback-form-state')
    console.log(result)
    formEl.reset();
  });
