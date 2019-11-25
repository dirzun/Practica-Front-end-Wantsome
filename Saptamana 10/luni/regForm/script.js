
const checkFunction = ()=>{

    let divError = document.createElement('div');
    divError.id="error";
    let textEror =  document.createElement('p');
    let textdiv = divError.appendChild(textEror);

    
    const checkusername =()=>{
        let divUser = document.getElementById('username');
        let username =  document.querySelector('input[name = user]').value;
        if (username.length < 5){
        divUser.appendChild(divError).appendChild(textdiv).textContent = "must suck ";
        }
    }
    //checkusername();

    const checkemail = () =>{
        let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        let divEmail = document.getElementById('email');
        let email =  document.querySelector('input[name = email]').value;
        if (!(email.match(pattern))){
        divEmail.appendChild(divError).appendChild(textdiv).textContent = "must suck ";
        }
    }
    //checkemail();

    const checkFLName = () =>{
        const firstName =()=>{
            let divFName = document.getElementById('firstName');
            let firstName = document.querySelector('input[name = fname]').value;
            if (!firstName){
                divFName.appendChild(divError).appendChild(textdiv).textContent = "must suck "
            }
        }
        const lastName =()=>{
            let divLName = document.getElementById('lastName');
            let lastName = document.querySelector('input[name = lname]').value;
        
            if (!lastName){
                divLName.appendChild(divError).appendChild(textdiv).textContent = "must suck "
            }
        }
    }
    //checkFLName();


    const checkPhone = () => {
        let phone = document.querySelector('input[name = phone]').value;
        let divPhone = document.getElementById('phone');
        if (phone.length < 10) {
            divPhone.appendChild(divError).appendChild(textdiv).textContent = "Must be at least 10 characters";
        }
    }
    checkPhone();
}





let btn = document.getElementById('button');
btn.addEventListener("click",checkFunction);
