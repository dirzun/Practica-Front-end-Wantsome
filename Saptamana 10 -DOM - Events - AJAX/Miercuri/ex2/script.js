const bahams = () => {
    const request = new XMLHttpRequest();
    request.open("GET",'https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json');
    request.onload = () => {
        const serverResponse = JSON.parse(request.response);
        console.log(serverResponse);
        const obiect = serverResponse;
       const arrKey = Object.keys(obiect);
       const arrVal = Object.values(obiect);
// a parsa
const header = document.getElementsByTagName('header')[0];
const section = document.getElementsByTagName('section')[0];
const list = document.createElement('ul');
section.appendChild(list);

    for (let i = 0; i < arrKey.length; i++){
        
    const itemList = document.createElement('li');
    list.appendChild(itemList).textContent = arrKey[i];
    itemList.style.backgroundColor = arrVal[i];
    }
};
request.send();
};
bahams();
