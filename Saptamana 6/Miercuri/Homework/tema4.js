/*4. Scrieti o functie de tip IIFE care:
- sorteaza urmatorul array in functie de proprietatea "salary" a fiecarui obiect continut:
var cars = [
  {name: "John",  salary: 20000 },
  { name: "Danny", salary: 30500 },
  { name: "Bekker", salary: 15000 }
];
- afiseaza in consola array-ul sortat
 */
/*
am scris o functie de tip iife - autoapelanta care am asignato variabilei "sortare".
-functia sorteaza crescator(de la mic la mare) in fucntie de valoare "salary" 
Avem un obiect "car" care are in el 3 siruri de date.
*/


 var sortare = (function(){
var cars = [
    { name: "John",  salary: 20000 },
    { name: "Danny", salary: 30500 },
    { name: "Bekker", salary: 15000 }
];

    
cars.sort((a, b) => {
        if (a.salary > b.salary) {
            return 1;           
        }
        else {
            return -1;
        }
    });
    return cars;
})();
    