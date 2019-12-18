//exercitiul 1

// PRE: create separate module to import fetch function(request) in index.js
//Folosind fetch() prima data returnam userii cu id-ul mai mare ca 5
//.then - returnam user names si city
//hint nu uitati sa transformati primul raspuns ca si json
const url = "https://jsonplaceholder.typicode.com/users";
/*
  export const bla = fetch(url);
  in alt fisier 
  import {bla} from 'index.js'
  */

const dateUsers = fetch(url)
  .then(response => response.json())
  .then(x =>
    console.log(
      x
        .filter(id => id.id > 5)
        .map(y => {
          return { username: y.username, city: y.address.city };
        })
    )
  );

//exercitiul 2
// PRE: vom implementa metoda separat si apoi o importam in index.js
// folosind fetch() vom face un post catre url-ul de mai jos
// trebuie sa completati in options ce metoda folosim, ce punem in body si ce punem in headers.
const url2 = "https://jsonplaceholder.typicode.com/posts";
//const link = fetch(url2).then(response => response.json());
const myPost = {
  title: "Javascript Post is awesome",
  body: "lorem ipsum etc",
  userId: 1
};

const options = {
  method: "POST",
  body: JSON.stringify(myPost),
  headers: { "Content-Type": "application/json" }
};
fetch(url2, options)
  .then(res => res.json())
  .then(res => console.log(res));

//***bonus***//

//Folosind url-ul gresit tratati cazul in care vom avea eroare
// trebuie verificat daca raspunsul e corect iar daca nu folosim "throw new Error" - cautati ce face, apoi il prindem in .catch()
fetch("https://jsonplaceholder.typicode.com/post", options)
  .then(res => res.json())
  .then(err => {
    try {
      throw new Error("Eroare fratsica");
    } catch (e) {
      console.error(e.name + ": " + e.message);
    }
  });

//exercitiul 3
// PRE: create separate module to import fetch function(request) in index.js
//1. fetch some horror books
//2. save the ones that have more than 230 pages
//3. display the ones that have more than one author

/*export*/ const url3 = "https://www.googleapis.com/books/v1/volumes?q=horror";

/*import { url3 } from "./module.js";*/

fetch(url3)
  .then(resp => resp.json())
  .then(obj =>
    console.log(
      obj.items
        .filter(x => x.volumeInfo.pageCount > 230)
        .filter(y => y.volumeInfo.authors.length >= 3)
    )
  );
