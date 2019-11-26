const puppies ='https://www.reddit.com/r/aww/search.json?q=puppy&restrict_sr=true';
const request = new XMLHttpRequest();
request.open('GET',puppies);
request.onload = () => {
    const serverResponse = JSON.parse(request.response);
    console.log(serverResponse);

    const replImg = () =>{
        const body = document.getElementsByTagName('body')[0];
        const textdel = document.getElementsByClassName('text')[0].style.display="none";
        const img = document.createElement('img');
        body.appendChild(img).setAttribute('src', serverResponse);
    }
    //replImg();
    const btn = document.getElementsByClassName('btn')[0];
btn.addEventListener('click',replImg);

}
request.send();