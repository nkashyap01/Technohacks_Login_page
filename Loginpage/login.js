
const username = document.getElementById('username');
const password = document.getElementById('password');
const message = document.getElementById('message');

const submit = document.getElementById('submit');

const user = "Neha Kumari";
const pass = "Neha@123";


submit.addEventListener('click', function () {

    if (username.value == user && password.value == pass) {
        message.innerHTML="Login Successfully ✅"
    } else {
         message.innerHTML = "Username or Password is incorrect ❌";
    }

event.preventDefault();

    
});