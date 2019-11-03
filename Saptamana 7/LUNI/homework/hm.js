/* 
1. Scrieti un for care itereaza de la 0 la 20. Pentru fiecare iteratie, verifica daca numarul curent este par sau impar si va
raporta acest lucru in consola. (exemplu: “2 este numar par”);
Scrieti functia in doua variante: while si for
*/
function verificaNumar (){
/*v1
    for (var i = 0; i <= 20; i++){
    if (i % 2 == 0) {
        console.log(i + " este un numar par");
    }
    else {
        console.log(i + " este un numar impar");
    }
}
v1 */
var i = 0;
while(i <= 20){
    if (i % 2 == 0){
        console.log(i + " este un numar par"); 
    }
    else {
        console.log(i + " este un numar impar"); 
    }
    i++;
}
}
//verificaNumar();




/* 
2. Scrieti un for care itereaza de la 0 la 10. Pentru fiecare iteratie, se va multiplica numarul curent cu 9 si se va afisa
rezultatul. (exemplu: “3*9=27”).
Scrieti functia in doua variante: while si for
*/

(function(){
    /* v1
    for (var i = 0; i <= 10; i++){
        console.log(i + "*9=" + (i*9));
    }
    */

    /*v2
    var i = 0;
    while (i <=10){
        console.log(i + "*9=" + (i*9));
        i++;
    } 
*/
})();


/*
3. Pentru fiecare cifra de la 1 la 10, afisati tabla inmultirii.
(exemplu: 1 * 0 = 0
 1 * 1 = 1
…
 1 * 10 = 10 )
Pentru a afisa in consola pe linie noua puteti concatena un string, la final, cu + “\n”.
*/
function tablaInmultirii(numar){
    for(var i = 1; i <= 10; i ++){
        console.log(numar + "*"+ i+"=" + (numar*i));
    }
}
tablaInmultirii(1);


/*4. Pentru functia dezvoltata la cerinta 2 de la tema anterioara, verificati si afisati in consola fiecare calificativ care se
poate obtine pentru punctajele incepand de 1 la 10. (exemplu: “Pentru 2, obtii calificativul E. \n Pentru 7, obtii
calificativul B \n ...samd “). Atentie: Rezultatul calificativului trebuie sa fie obtinut prin utilizarea functiei
dezvoltate la tema anterioara !  */
