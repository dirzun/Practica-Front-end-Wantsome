/*
1. Creati o functie care primeste un numar ca si argument si returneaza un Promise care testeaza daca valoarea este
mai mica sau mai mare decat 10 - se va face reject / resolve in functie de valoarea de adevar a conditiei de
comparatie.
Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri.
*/

const check = numar => {
  return new Promise((resolve, reject) => {
    if (numar < 10) {
      resolve("Numarul este mai mic!");
    } else {
      reject("Numarul este mai mare!");
    }
  });
};
/*
check(8).then(mamaMare => {
  console.log(mamaMare);
});

check(12).catch(res => {
  console.log(res);
});
*/
/*
2. Creati o functie care primeste un string ca si argument si returneaza un Promise care testeaza daca acesta contine
sau nu cuvantul “promise” - se va face reject / resolve in functie de valoarea de adevar a conditiei specificate.
Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri.
*/
const checkstr = string => {
  return new Promise((resolve, reject) => {
      const wordReg = /promise/;
      //string.includes('promise')
    if (wordReg.test(string)) {
      return resolve(`contine ${string}`);
    } else {
      return reject(`nu contine ${string}`);
    }
  });// daca contine corectare
};
/*
checkstr("daspromise").then(cuvant => {
  console.log(cuvant);
});
checkstr("pisica").catch(cuvant => {
  console.log(cuvant);
});
*/
/*
3. Creati o functie care primeste un singur parametru si returneaza un Promise. Folosind setTimeout, dupa 500ms,
acest Promise fie va face resolve, fie va face reject, in functie de urmatoarele cazuri: daca input-ul este un string,
Promise-ul se va rezolva cu rezultatul avand valoarea string-ului uppercased; daca input-ul nu este un string,
Promise-ul va face reject cu rezultatul avand valoarea string-ului fara nicio modificare.
Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri.
*/

const ofunctie = parametru => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof parametru === "string") {
        return resolve(parametru.toUpperCase());
      } else {
        return reject(parametru);
      }
    }, 2500);
  });
};
/*
ofunctie("pisi").then(str => {
  console.log(str);
});
ofunctie(324).catch(some => {
  console.log(some);
});
*/

/*
4. Creati doua functii care folosesc Promises pentru a putea face o inlantuire (Promise chain).
Prima functie, capitalizeWords(), va primi ca si argument un array de cuvinte si va aplica o operatiune de capitalize pe acestea.
A doua functie, sortWords(), va primi ca si argument rezultatul primului Promise si va sorta cuvintele in ordine
alfabetica. In cazul in care array-ul initial contine un element cu o valoare diferita de tipul string, se va face reject.
*/

const capitalizeWords = (some) =>{
    let pomis =  new Promise((resolve, reject)=>{
        if ( some.every(elemt => typeof elemt === "string")){
        resolve(some.map(litera => litera.charAt(0).toUpperCase() + litera.substring(1)));
      }
        else {
          let eroare = "this array is shit";
            reject(eroare);
        }
        
    })

    return pomis;
}
const sortWords = (x)=> x.sort();
const result = (y)=>console.log(y);
const arr = eror => console.log(eror);


//capitalizeWords(['abc','mia','bubble','bobs'])
//.then(sortWords)
//.then(result)
//.catch(arr)


/*
5.Implementati functionalitatea anterior prezentata si folositi-o pentru a apela mai multe API-uri externe, la alegere (
cel putin 3 )
https://cat-fact.herokuapp.com/Facts
https://random.dog/woof.json
*/



const dog ='https://random.dog/woof.json';
const request = new XMLHttpRequest();
request.open('GET',dog);
request.onload =()=>{
  const serverResponse = JSON.parse(request.response);
  console.log(serverResponse);
  const display = () =>{
    document.getElementsByTagName('img')[0].setAttribute('src', serverResponse.url)
  }
  display();

  const rel = () =>window.location.reload();
  document.getElementsByTagName('button')[0].addEventListener('click',rel);
  
}
request.send();

/*
const cat ='https://cat-fact.herokuapp.com/facts/random';
const reqst = new XMLHttpRequest();
reqst.open('GET', cat);
reqst.onload=()=>{
  const serverResponse2 = JSON.parse(reqst.response);
  console.log(serverResponse2);
}
reqst.send();
*/




/*
const dog ='https://random.dog/woof.json';
function get(dog) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', dog);

    req.onload = function() {


      
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
}
*/