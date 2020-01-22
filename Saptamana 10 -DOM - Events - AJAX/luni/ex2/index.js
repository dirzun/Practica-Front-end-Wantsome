//1 Adaugati un tag script pentru a face legatura
// intre fisierul js si html

//2
//adaugati un event listener pentru buton care apeleaza
// o functie postTheGossip cand este apasat
const postTheGossip = () =>{ 
    let name = document.getElementById('name').value;
    let adjective = document.getElementById('adjective').value;
    let randomWord = document.getElementById('random-word').value;

    let output = document.getElementById('story');
    let some = name + adjective + randomWord;
    
    output.innerHTML = some;
};
let btn = document.getElementById("exButton");
btn.addEventListener("click",postTheGossip);
//3
// In aceasta functie luati toate valorile fieldurilor
// si faceti un story din ele
// ex "Xulescu este innebunit dupa bere neagra"
