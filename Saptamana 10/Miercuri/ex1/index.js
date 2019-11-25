// https://www.screencast.com/t/xglbfmIGjaVa - asa tre sa arate la final
//'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
// numele echipei va fi intr-un h1, locul si cand a fost formata in p-uri. 
// cele 3 coloane vor fi incadrate intr-un tag <article>
// numele eroului va fi un h2
// 3 paragrafe care ne vor zice varsta, identitatea secreta ,super puterea
// super puterile le vom avea intr-o lista - ul 

const header = document.querySelector('header');
const section = document.querySelector('section');
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


request.onload = () => { 
    let superHeroes = request.response;
    populateHeader(superHeroes);
};

const populateHeader = jsonObj => {
    let myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    myPara.textContent = "Hometown: " + jsonObj['homeTown'] + " // Formed" + jsonObj['formed'];
    header.appendChild(myPara);
};

const showHeroes = jsonObj =>{
    let heroes = jsonObj['members'];
    for (let i=0; i <= jsonObj.length; i++){
        let myArticle = document.createElement('article'); 
        let myH2 = document.createElement('h2');
        let myPara1 = document.createElement('p');
        let myPara2 = document.createElement('p');
        let myPara3 = document.createElement('p');
        let myList = document.createElement('ul');
        
    } 

}
