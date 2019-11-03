/* 
1. Scrieti un for care itereaza de la 0 la 20. Pentru fiecare iteratie, verifica daca numarul curent este par sau impar si va
raporta acest lucru in consola. (exemplu: “2 este numar par”);
Scrieti functia in doua variante: while si for
*/

/*
-
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
function tablaInmultirii(){
    for(var i = 1; i <= 10; i++){
        for (numar = 1; numar <= 10; numar++)
        console.log(numar + "*"+ i+"=" + (numar*i));
    }
}
tablaInmultirii();


/*4. Pentru functia dezvoltata la cerinta 2 de la tema anterioara, verificati si afisati in consola fiecare calificativ care se
poate obtine pentru punctajele incepand de 1 la 10. (exemplu: “Pentru 2, obtii calificativul E. \n Pentru 7, obtii
calificativul B \n ...samd “). Atentie: Rezultatul calificativului trebuie sa fie obtinut prin utilizarea functiei
dezvoltate la tema anterioara !  */

var calificativ = function(punctaj){
    // prin metoda switch verificam daca punctajul se incadreaza in normele definite
    switch(true){
        //cazul 1 comparata daca numarul introduce este mai mic sau egal 1 sau mai mic decat 3, daca rezultatul este corect functia se va opri si  se va afisa textul din "return ....", daca nu va compara mai departe...
        case (punctaj <= 1 || punctaj < 3):
            return "Calificatul corespunzator punctajului " + punctaj + " este " + " E";
            break;
        case (punctaj <= 3 || punctaj <= 6):
            return "Calificatul corespunzator punctajului " + punctaj + " este " + " D";;
            break;
        case (punctaj <= 7 || punctaj <= 8):
            return "Calificatul corespunzator punctajului " + punctaj + " este " + " B";;
            break;
        case (punctaj === 9):
            return "Calificatul corespunzator punctajului " + punctaj + " este " + " A";;
            break;
        case (punctaj === 10):
            return "Calificatul corespunzator punctajului " + punctaj + " este " + " A+";
            break;
            // in cazul in care paramentrul introdus nu corespunde cu cazurile de mai sus, se va afisa un text standard care il definim ca "default".
        default:
            return "Introdu punctajul de la 1 la 10";
    }
}

function checkCalificativ(){
    for ( var i = 0;i <= 10; i++){
        console.log("Pentru punctajul " + i + " obtii calificativul " + calificativ(i));
    }
}
checkCalificativ();
