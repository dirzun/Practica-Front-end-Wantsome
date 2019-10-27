/*
1. Scrieti o functie de tip named function denumita greatestNrBetween care:
- Primeste ca argumente doua numere
- Returneaza numarul care este mai mare
Apelati functia de doua ori si afisati pe ecran textul: “Numarul mai mare dintre 5 si 10 este 10“
*/
/*  function greatestNrBetween(num) {
    if (num < 5) {
        return "Numarul este mai mic";
    }else {
        return "Numarul este mai mare sau egal cu 10";
    }
};
greatestNrBetween(8);
*/



//Defense Programming
//|| typeof !== "number"
/* function greatestNrBetween(num,num2) {
    if (typeof num !== "number" || typeof num2 !== "number"){
        return "Wrong argument";
    }

    if (num < num2) {
        return num + " este mai mic";
    } 
    else if (num > num2){
        return num + " este mai mare"
    }
    else if (num = num2){
        return num + " este egal cu " + num2; 
    }
    else {
        return "Numarul mai mare dintre 5 si 10 este 10";
    }
};
greatestNrBetween(5,10); */

function greatestNrBetween(num,num2) {
    if (typeof num !== "number" || typeof num2 !== "number"){
        return "Wrong argument";
    }
    if (num > num2){
        return "Numarul mai mare dintre" + num + " si " + num2 + " este " + num;
    }
    else if (num === num2){
        return "Numarul " + num + " si " + num2 + " sunt egale.";
    }
    else {
        return "Numarul mai mare dintre" + num + " si " + num2 + " este " + num2;
    }
};
greatestNrBetween(5,10);

//ex2
/*
2. Scrieti o functie de tip function expression asociata cu numele helloWorldInLang care:
- Primeste ca argument codul unei limbi: “en”, “es”, “de”
- Returneaza “Hello World” pentru limba corespunzatoare ( cel putin 3 limbi )
- Daca limba nu este specificata, trebuie sa returneze textul pentru limba engleza
Apelati functia pentru fiecare caz in parte.
*/


var limba = function (a) {
    if (a === "en") {
        return "hello world";
    }
    else if (a === "es") {
        return "ceva in spaniola";
    }
    else if (a === "de"){
        return "ceva in germana";
    }
    else {
        return "iesi afara!!!"
    }
};


function limba2(a){
    switch (a){
        case a === "en":
            console.log("ceva in en");
            break;
        case a === "es":
            console.log ("ceva in spaniola");
            break;
        case a === "de":
            console.log ("ceva in germana");
            break;
    default:
    console.log ("esi afara");
    }
}

//ex3
/*
3. Scrieti o functie numita pluralizeWord care:
- accepta doua argumente: un substantiv in engleza si un numar
- returneaza numarul si forma de plural corespunzatoare substantivului, precum: “5 cats”, “1 dog”
- adaugati cateva cazuri particulare pentru cuvinte precum “sheep” sau “geese”
*/ 

function pluralWord(numar,substantiv){
    if (typeof substantiv !== "string" || typeof numar !== 'number') {
        return "Wrong argument";
    }
    if (numar <= 1){
        return numar + substantiv;
    }
    else if (numar > 1){
        return numar + substantiv +"s";
    }
    else {
        return "esi afara";
    }
};


//ex4 
/* 
4. Scrieti o functie care accepta ca argument venitul anual al unui angajat in dolari (ex: $30,000) si calculeaza taxa
corespunzatoare considerand urmatoarele criterii:
- daca angajatul castiga anual o suma mai mica de $30,000, taxa este 0%
- daca venitul anual se situeaza intre $50,000 - $99,999, taxa calculata trebuie sa fie 35%
- pentru venit mai mare de $100,000, taxa se calculeaza ca procentaj de 40%
Returnati un text care sa aiba un format asemanator: “Pentru un venit anual de x, aveti de platit taxe in valoare de
y”
*/
function venitAnul(venit){
    if (venit < 30000){
        return "Pentru un venit anual de " + venit +  ", aveti de platit taxe in valoare de 0$";
    }
    else if( venit >= 30000 && venit < 100000){
        return "Pentru un venit anual de " + venit + ", aveti de platit taxe in valoare de " + (venit * 0.35) + "$";
    }
    else {
        return "Pentru un venit anual de " + venit + ", aveti de platit taxe in valoare de " + (venit * 0.4) + "$";
    }
}

//ex5
/* 
5. Scrieti in doua variante o functie care accepta ca argument o valoare numerica pentru un parametru numit points si
afiseaza:
- AA if points is greater than 90
- AB if points is greater than 80 and less than or equal to 90
- BB if points is greater than 70 and less than or equal to 80
- BC if points is greater than 60 and less than or equal to 70
- CC if points is greater than 50 and less than or equal to 60
- CD if points is greater than 40 and less than or equal to 50
- DD if points is greater than 30 and less than or equal to 40
- FF if points is less than or equal to 30
*/

/* function  valoareNum(points){
    if (points > 90){
        return "AA";
    }
    else if (points <= 90 && points > 80){
        return "AB";
    }
    else if (points <= 80 && points > 70){
        return "BB";
    }
    else if (points <= 70 && points > 60){
        return "BC";
    }
    else if (points <= 60 && points > 50){
        return "CC";
    }
    else if (points <= 50 && points > 40){
        return "CD";
    }
    else if (points <= 40 && points > 30){
        return "DD";
    }
    else if (points <= 30){
        return "FF";
    }
    else {
        return "iesi afara";
    }
}
*/

function  valoareNum(points){
    switch(true){
        case (points > 90):
            return "AA";
            break;
        case points <= 90 && points > 80:
            return "AB";
            break;
        case points <= 80 && points > 70:
        return "BB";
        break;
        case points <= 70 && points > 60:
        return "BC";
        break;
        case points <= 60 && points > 50:
        return "CC";
        break;
        case points <= 50 && points > 40:
        return "CD";
        break;
        case points <= 40 && points > 30:
        return "DD";
        break;
        case points <= 30:
        return "FF";
        break;
        default:
            return "iesi afara";
    }
}





//ex6
/*
6. Scrieti o functie care testeaza daca o anumita data introdusa este weekend:
Test Data :
console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));
Output :
"weekend"
"weekend"
undefined
*/

function is_weekend(dataintrodusa){
    var ziuadorita = new Date(dataintrodusa);
    var checkDay = ziuadorita.getDay();
    
        if (checkDay == 0 || checkDay == 6){
            return "Este weekend";
        }
        else
        return "E zi simpla, treci la treaba";

}
