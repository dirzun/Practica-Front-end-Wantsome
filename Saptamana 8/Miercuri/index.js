var closure = function(numar){
    let a = numar;
    return function(){
        a++;
        return a;
    };
};



/* 

//freze
const myNotFrezeObject = {
    key : "value1",
    key2 : "value2",
    };
    
    // a.key = "myNewValue";
    
    
    const myFrezedObject = Object.freze({
    key : "value1",
    key2 : "value2",
    });
    
    myFreezedObject.key1 = "myNewValuePlease";
    console.log(myFrezedobject);





   //Implementati toate exercitiile folosind sintaxa ES6
//Toate denumirile de variabile si functii trebuie sa fie in EN
//Folositi nume sugestive si aveti grija la indentare
*/
/*
1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata
*/
//function expression - variabila in care stocker o function
//Es5
var sumNumberUpTo = function(limit){
    var sum =0;
    for (var i = 1; i <= limit; i++){
      sum +=i;
    }
    return sum;
  };
  
  //ES6 daca is mai multi parametri (limit1, limit2)
  const sumNumberUpToNew = limit =>{
    let sum = 0;
    for(let i = 1; i<= limit; i++){
      sum += i;
    }
    return sum;
  };
  
  
  
  /*
  2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.
  */
  
 //    lungimea
//es5
function lungStr (unString){
    var xlung = unString.split(" ");
    var resultStr = xlung.sort(function (a,b){
        return b.length - a.length;
    });
    return resultStr[0];
};
console.log(lungStr('bla bla bllallala bla'));

//es6
 const lungimeStr = oString =>{
     let xString = oString.split(" ");
     let resultXString = xString.sort((a,b)=>{return b.length - a.length});
     return resultXString[0];
 }
  /*
  3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'
  .split('').reverse().join('');
  */
function paramStr (unstr){
    return unstr.split('').reverse().join('');
}

const paramStrr = unstrr => unstrr.split('').reverse().join('');

  /*
  4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu urmatoarea litera din alfabet
  */
  function inlocLetter(unCuv){

      console.log(String.fromCharCode(66));
    let  unCuvant = unCuv.split('');
    console.log(unCuvant);
    let result = [];
      for (let i = 0; i < unCuvant.length;i++){
            //console.log(result.push(unCuvant.charCodeAt[i] + 1));
            unCuvant[i]
      }
      return result;
  }
  inlocLetter('ABCD');
  /*
  5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la numarul de ore si minute corespunzatoare.
  Exemplu: input: 64  ->  output: 1:4
  */
  
  /*
  6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic
  */
  
  /*
  7. Implementati o functie care accepta ca parametru un string si verifica daca inainte si dupa fiecare litera din cadrul sau se afla caracterul '+'
  Exemplu: input: "+a+b+c+"   ->   output: true
  Exemply: input: "+ab+c+d+"  ->   output: false
  */
