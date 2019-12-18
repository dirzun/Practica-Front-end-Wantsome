//Ex1. 
//Setati 3 cookie-uri cu numele, profesia si varsta voastra
//Stocatile in 3 variabile dupa si afisatile in consola
//Setati 2 cookie-uri (cu ce valori vreti voi) care sa expire la un momendat
// Stocatile si pe astea in alte 2 variabile
// La final vrem sa vedem 5 cookieuri in console.log

const cook1 = document.cookie = "DirzuNi = FrontEnd/25";
const cook2 = document.cookie = "DirzuNic = Front-End/25"; 
const cook3 = document.cookie = "DirzuNicu = Front--End/25";
const cook4 = document.cookie = "blabla = blabla; expires = 21 Jan 2020 20:00:00 UTC";
const cook5 = document.cookie = "MosVasile = oVodca; expires = 21 Jan 2020 20:00:00 UTC";


//Ex2. 
//Stocati in localStorage urmatoarele chei si valori ("width" "100px") ("height" "100px") ("background-color" "green")
//stocatile in 3 variabile diferite
// folositile pentru a construi un patrat cu ele
const var1 = localStorage.setItem("width","100%");
const var2 = localStorage.setItem("height","100%");
const var3 = localStorage.setItem("background-color","green");
const width = localStorage.getItem("width");
const height = localStorage.getItem("height");
const bgcolor = localStorage.getItem("background-color");
const patratDiv = document.getElementsByTagName('body')[0];
patratDiv.appendChild(document.createElement('div')).style.cssText =`width:${width}; height:${height}; background-color:${bgcolor}`;



//Obiectul de mai jos il puneti intr-un fisier separat "world.json"
//faceti fech intr-un fisier separat de index.js
//importati fetch-ul in index.js
// stocati tot raspunsul in localStorage - hint - stringify
// Folosindu-va de html css si JS afisati autorul si tilul iar dedesubt video-ul sa putem da play(folositi media)
// in functie de rating afisati atatea stele cat are ratingul de exemplu daca ratingul e 3 afisam sub video * * *


const world = fetch('./world.json')
.then(resp => resp.json())
.then(obiect => localStorage.setItem('worlds',JSON.stringify(obiect)));







console.log(localStorage.getItem('worlds'));
const pars = JSON.parse(localStorage.getItem('worlds'));
console.log(pars);

const divBox = document.getElementsByTagName('div')[0];
divBox.innerHTML = pars.map(obi =>`<h4>${obi.title}</h4><p>${obi.author}</p><iframe width="420" height="315" src="${obi.youtubeVideo}"></iframe><p>${"*".repeat(obi.rating)}</p>`).join('');


