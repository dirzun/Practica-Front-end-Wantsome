/*4. Scrieti o functie de tip IIFE care:
- sorteaza urmatorul array in functie de proprietatea "salary" a fiecarui obiect continut:
var cars = [
  {name: "John",  salary: 20000 },
  { name: "Danny", salary: 30500 },
  { name: "Bekker", salary: 15000 }
];
- afiseaza in consola array-ul sortat
 */
(function(){
var cars = [
    { name: "John",  salary: 20000 },
    { name: "Danny", salary: 30500 },
    { name: "Bekker", salary: 15000 }
];

    
    cars.sort((a, b) => {
        if (b.salary > a.name) {
            return 1;           
        }
        else {
            return -1;
        }
    })
console.log(cars);
})();
