const form = document.getElementById('form');
const username = document.getElementById('username');
const email =  document.getElementById('email');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const phone = document.getElementById('phone');
// error
const errorUser = document.getElementsByClassName('errorUser');
const errorEmail = document.getElementsByClassName('errorEmail');
const errorfname = document.getElementsByClassName('errorfname');
const errorlname = document.getElementsByClassName('errorlname');
const errorPhone = document.getElementsByClassName('errorPhone');

form.addEventListener('submit', checker = () =>{
    let mess = document.createElement('p');

    if (username.length < 5) {
        
        errorUser.appendChild(mess).textContent = "suck";
    }
});
