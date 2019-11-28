//ex.1.
// Scrieti o functie care sa mute literele cu o litera mai incolo folosind .map
// de exemplu moveLetters('hello') // => 'ifmmp'
// moveLetters('abcxy') // => "bcdyz"
//hint : String.fromCharCode() String.charCodeAt()
const moveLetters = (string)=>{
   const arr = string.split("");
   const codearr = arr.map(x => String.fromCharCode(x.charCodeAt(x)+1));
   return codearr;
};
    // your code
  
  
  // ex2
  // Vreau sa am o functie care sa faca uppercase la cuvinte in functie ca in exemplu de mai jos
  // changeWordCase('hey ppl, lets learn javascript together') // => "HEY ppl, LETS learn JAVASCRIPT together SOMETIME"
  let changeWordCase =(strings)=>{
      const arr2 = strings.split(" ");
      const impar = ()=>{
          if (x%2 ===0){x.toLowerCase()}
          else {x.toUpperCase()};
      };
       const rezarr = arr2.map((x) =>x.toUpperCase());
        return rezarr;
    // Code
  }





  // ex3
// Faceti asftel incat toate variabilele de mai jois sa returneze ceea ce zice numele
const arr = [
    {name:'sasha', sex:'f', age:7, species:'cat'},
    {name:'john', sex:'m', age:133, species:'human'},
    {name:'titus', sex:'m', age:62, species:'human'},
    {name: 'kalifa', sex:'f', age:255, species:'human'},
    {name: 'oreo', sex:'m', age:21, species:'cat'},
    ];
    
  // let allCats =  code
  // let allHumans =  code
  // let allFemales =  code
  // let totalOfAllAges =  code
  // let averageAgeOfCats =  code
  // let averageAgeOfHumans = code
  // let avgLengthOfNames = code
  






  

  //ex 1.
// Faceti o functie numita composedValue care ia ca argumente 2 functii si returneaza valoarea lor - // f1(f2(value))
//ex composedValue(square, double, 5);  // 100
// functia square returneaza patratul numarului iar double - dublul numarului


//ex.2
//faceti o functie 'compose' care atunci cand va fi apleata returneaza rezultatul altor 2 functii;
//exemplu const myFunction = compose(square, double) 
// myFunction(5)  --> 100
// myFunction(10) --> 400  ...etc


//ex.3
//faceti o functie find care ia ca parametrii un array si o functie care testeaza arrayul si returneaza doar elmentele care trec testele.
// find([1,2,3,4,5], isOdd); returneaza 1 3 5
