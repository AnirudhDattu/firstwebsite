function validate(event) {
  event.preventDefault();
  const emailInput = document.querySelector('#username');
  const passwordInput = document.querySelector('#password');
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (emailValue !== 'anirudh@123' || passwordValue !== 'iamgreat') {
    alert('Invalid email or password');
    return false;
  }

  // Redirect to another page on successful login
  window.location.href = 'mainpage.html';
}

const submitButton = document.querySelector('.login__submit');

submitButton.addEventListener('click', validate);
