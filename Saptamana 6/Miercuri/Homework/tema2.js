/*
2. Scrieti o functie sub forma function expression care accepta ca argument o valoare numerica
cuprinsa intre 1 si 10 si decide calificativul punctajului.
Criteriile sunt urmatoarele:
- 1-3 = E
- 3-6 = D
- 7-8 = B
- 9 = A
- 10 = A+
Functia va returna un text de forma "Calificatul corespunzator punctajului [punctaj] este [calificativ]".
*/


//am creat o variabila "calitativ" caruia i-am asignat functia cu paramentru punctaj""
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
