//ex.1.
// Scrieti o functie care sa mute literele cu o litera mai incolo folosind .map
// de exemplu moveLetters('hello') // => 'ifmmp'
// moveLetters('abcxy') // => "bcdyz"
//hint : String.fromCharCode() String.charCodeAt()
/* v1 
const moveLetters = (string)=>{
   const arr = string.split("");
   const codearr = arr.map(x => String.fromCharCode(x.charCodeAt(x)+1));
   return codearr;
};*/
//v2 Optimised 
const moveLetters = (string)=>string.split("").map(x => String.fromCharCode(x.charCodeAt(x)+1));

    // your code
  
  
  // ex2
  // Vreau sa am o functie care sa faca uppercase la cuvinte in functie ca in exemplu de mai jos
  // changeWordCase('hey ppl, lets learn javascript together') // => "HEY ppl, LETS learn JAVASCRIPT together SOMETIME"
  const changeWordCase =(strings)=>{
     const arr = strings.split(" ");
     let x =[];
    for (let i =0; i<arr.length; i++ ){
      if (i % 2 === 0){
        x.push(arr[i].toUpperCase())}
        else {x.push(arr[i].toLowerCase()) }
      } 
return x;
    };

  // ex3
// Faceti asftel incat toate variabilele de mai jois sa returneze ceea ce zice numele
const arr = [
    {name:'sasha', sex:'f', age:7, species:'cat'},
    {name:'john', sex:'m', age:133, species:'human'},
    {name:'titus', sex:'m', age:62, species:'human'},
    {name: 'kalifa', sex:'f', age:255, species:'human'},
    {name: 'oreo', sex:'m', age:21, species:'cat'},
    ];
    
 let allCats = arr.filter(x => x.species==='cat');  
 let allHumans = arr.filter(x => x.species==='human');
 let allFemales = arr.filter(x => x.sex==='f');
 let totalOfAllAges =  arr.reduce((acc,x) => acc + x.age,0);
 let averageAgeOfCats = arr.filter(i =>i.species === 'cat').map(x=>x.age).reduce((a,b) => a+b,0)/arr.filter(i =>i.species === 'cat').length;
 let averageAgeOfHumans = arr.filter(i =>(i.species === 'human')).map(x=>x.age).reduce((a,b) => a+b,0)/arr.filter(i =>(i.species === 'human')).length;
 let avgLengthOfNames = arr.map(x=>x.name.length).reduce((a,b) => a+b,0)/arr.length;
  






  

  //ex 1.
// Faceti o functie numita composedValue care ia ca argumente 2 functii si returneaza valoarea lor - // f1(f2(value))
//ex composedValue(square, double, 5);  // 100
// functia square returneaza patratul numarului iar double - dublul numarului
const square = (y) =>y*y;
const double = (x)=>x*2;
const composedValue = (square,double,num) =>square(double(num));

//ex.2
//faceti o functie 'compose' care atunci cand va fi apleata returneaza rezultatul altor 2 functii;
//exemplu const myFunction = compose(square, double) 
// myFunction(5)  --> 100
// myFunction(10) --> 400  ...etc
const compose = (num) => square(double(num));

//ex.3
//faceti o functie find care ia ca parametrii un array si o functie care testeaza arrayul si returneaza doar elmentele care trec testele.
// find([1,2,3,4,5], isOdd); returneaza 1 3 5
const isOdd = (a) => a.filter(a => a%2 !== 0);
const find = (arrai, fuction)=> arrai.map(x => fuction(x));