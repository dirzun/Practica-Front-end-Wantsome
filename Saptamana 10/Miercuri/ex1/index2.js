const req = () => {
    const xmlReq = new XMLHttpRequest();
    xmlReq.open("GET", "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");
    xmlReq.onload = () => {
        const serverResponse = JSON.parse(xmlReq.response);
        console.log(serverResponse.members);
      // JSON.stringify(javaScriptObj)
        const header = document.getElementsByTagName('header')[0];
        const h1 = document.createElement('h1');
        header.appendChild(h1).textContent = serverResponse.squadName;
        const p = document.createElement('p');
        header.appendChild(p).textContent =`Hometown: ${serverResponse.homeTown} // Formed: ${serverResponse.formed}`;
//section
const section = document.getElementsByTagName('section')[0];
const members = serverResponse.members;
for (i = 0; i < members.length;i++ ){
      const myArticle = document.createElement('article');
      const h2 = document.createElement('h2');
      const elemP = document.createElement('p');
      const elemP2 = document.createElement('p');
      const elemP3 = document.createElement('p');
      const myList = document.createElement('ul');

      section.appendChild(myArticle).appendChild(h2).textContent = members[i].name;
      myArticle.appendChild(elemP).textContent = "Secret Identity: " + members[i].secretIdentity;
      myArticle.appendChild(elemP2).textContent ="Age: " + members[i].age;
      myArticle.appendChild(elemP3).textContent = "Superpowers:";
      myArticle.appendChild(myList);
      
      const superPow = members[i].powers;
      for (let j = 0; j < superPow.length; j++) {
        const listItem = document.createElement('li');
        listItem.textContent = superPow[j];
        myList.appendChild(listItem);
      }
      

}
    };
    xmlReq.send();
    };
req();
