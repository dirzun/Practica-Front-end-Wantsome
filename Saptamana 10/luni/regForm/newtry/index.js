const btn = document.getElementById('button');
const form = document.getElementById('form');
//error
let divError = document.createElement('div');
divError.id="error";
let textEror =  document.createElement('p');
let textdiv = divError.appendChild(textEror);
   
//username
const divUser = document.getElementById('username');
const username =  document.querySelector('input[name = user]').value;

//email
const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
const divEmail = document.getElementById('email');
const email =  document.querySelector('input[name = email]').value;

//first&last name
const divFName = document.getElementById('firstName');
const firstName = document.querySelector('input[name = fname]').value;
const divLName = document.getElementById('lastName');
const lastName = document.querySelector('input[name = lname]').value;

//phone
const phone = document.querySelector('input[name = phone]').value;
const divPhone = document.getElementById('phone');



form.addEventListener('submit',(e)=>{
    e.preventDefault();

    if (username.length < 5 || username === " "){
        e.preventDefault();
        divUser.appendChild(divError).appendChild(textdiv).textContent = `Please enter a valid username`;
    }
    if (!(email.match(pattern))){
        e.preventDefault();
        divEmail.appendChild(divError).appendChild(textdiv).textContent = `Please enter a valid address`;
    }
    if (!firstName){
        e.preventDefault();
        divFName.appendChild(divError).appendChild(textdiv).textContent = `Please enter a valid First Name`;
    }
    if (!lastName){
        e.preventDefault();
        divLName.appendChild(divError).appendChild(textdiv).textContent = `Please enter a valid Last Name`;
    }
    if (phone.length < 10) {
        e.preventDefault();
        divPhone.appendChild(divError).appendChild(textdiv).textContent = `Must be at least 10 characters`;
    }
},true);
