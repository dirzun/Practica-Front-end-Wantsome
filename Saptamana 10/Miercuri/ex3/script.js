const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';


const request = new XMLHttpRequest();
request.open('GET',url,true);
request.onload = () => {
    const serverResponse = JSON.parse(request.response);
    console.log(serverResponse);
const quote = document.getElementById('quote');
const btn = document.getElementById('xhr');

btn.addEventListener('click',(e) => {e.preventDefault(); quote.textContent = serverResponse},false);

}
request.send();
