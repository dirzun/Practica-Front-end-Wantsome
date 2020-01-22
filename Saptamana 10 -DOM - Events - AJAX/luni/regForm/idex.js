
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email =  document.getElementById('email');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const phone = document.getElementById('phone');



const checkFunction = () => {
    //div Message 
    let divError = document.createElement('div');
    divError.id="error";
    let msg = divError.appendChild(document.createElement('p'));
    
        if (username.length < 5){
            let label = document.getElementsByClassName('errorUser');
            label.id="error";
        label.appendChild(document.createElement('p')).textContent= "must suck ";
        }

/*
        let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!(email.match(pattern))){
        divEmail.appendChild(divError).appendChild(textdiv).textContent = "must suck ";
        }


            let divFName = document.getElementById('firstName');
            let firstName = document.querySelector('input[name = fname]').value;
            if (!firstName){
                divFName.appendChild(divError).appendChild(textdiv).textContent = "must suck "
            }
 
            let divLName = document.getElementById('lastName');
            let lastName = document.querySelector('input[name = lname]').value;
        
            if (!lastName){
                divLName.appendChild(divError).appendChild(textdiv).textContent = "must suck "
            }



        let phone = document.querySelector('input[name = phone]').value;
        let divPhone = document.getElementById('phone');
        if (phone.length < 10) {
            divPhone.appendChild(divError).appendChild(textdiv).textContent = "Must be at least 10 characters";
        }
*/
    }

let btn = document.getElementById('button');
btn.addEventListener("click",checkFunction);
