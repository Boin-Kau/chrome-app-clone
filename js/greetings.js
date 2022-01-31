const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greetingH1 = document.querySelector('#greeting');

const onLoginSubmit = (event) => {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value; 
  localStorage.setItem(USERNAME_KEY, username);

  paintGreeting(username);
}


const paintGreeting = (username) => {
  greetingH1.innerText = `Hi, ${username}!`;
  greetingH1.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}