const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zipcode = document.querySelector('#zipcode');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#confirm-password');
const form = document.querySelector('#form');
const message = document.querySelector('.message');

email.addEventListener("change", (event) => {
  if (email.validity.typeMismatch || email.validity.valueMissing) {
    email.setCustomValidity("Please input a proper email address! 'example@website.com'");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
})

country.addEventListener("focusout", (event) => {
  if (country.validity.valueMissing) {
    country.setCustomValidity("Selecting a country is required.");
    country.reportValidity();
  } else {
    country.setCustomValidity("");
  }
})

zipcode.addEventListener("change", (event) => {
  if (zipcode.validity.patternMismatch) {
    zipcode.setCustomValidity("Please input a properly formatted zipcode!");
    zipcode.reportValidity();
  } else {
    zipcode.setCustomValidity("");
  }
})

password.addEventListener("change", (event) => {
  if (password.validity.valueMissing || password.validity.tooShort) {
    password.setCustomValidity("Password needs to be at least 6 characters long!")
    password.reportValidity();
  } else {
    password.setCustomValidity("");
  }
})

passwordConfirm.addEventListener("change", (event) => {
  if (passwordConfirm.validity.valueMissing || passwordConfirm.validity.tooShort) {
    passwordConfirm.setCustomValidity("Password needs to be at least 6 characters long!")
    passwordConfirm.reportValidity();
  } else if (password.value !== passwordConfirm.value) {
    passwordConfirm.setCustomValidity("Passwords need to match!!")
    passwordConfirm.reportValidity();
  } else {
    passwordConfirm.setCustomValidity("");
  }
})

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (form.checkValidity()) {
    message.innerHTML = 'Congrats! You properly filled out the form!'
  } else {
    message.innerHTML = 'Check your inputs and try again!!'
  }
})