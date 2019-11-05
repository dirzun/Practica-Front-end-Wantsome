//Ex1
//Scrieti o functie care sa protejeze emailul unui user
// de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"
function hideEmail(emailul){
    var strEm = emailul.split('@');
    var firstPart = strEm[0];
    var part2 = strEm[1];
    firstPart = "..."//done
    return firstPart + '@' + part2;
}

//Ex2
//Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
// de ex: myFunction("i am superman") sa printeze "I Am Superman"
function firstToUppercase(fraza){
    var frazaArr = fraza.split(' '); 
    var rezul = [];
    for (i=0, len = frazaArr.length; i < len ;i++){
        rezul.push(frazaArr[i].charAt(0).toUpperCase() + frazaArr[i].slice(1).toLowerCase()+ ' ');
    }
return rezul.join(" ");
}

//Ex3
// Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
// ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"

function lowerToUpper(cuvant){
    var splitw = cuvant.split('');
    var funcresult = [];
    var splitwLung = splitw.length;

    for (i = 0; i < splitwLung; i++) {
        if (splitw[i] === splitw[i].toUpperCase()) {
            funcresult.push(splitw[i].toLowerCase());
        }
        else {
            
            funcresult.push(splitw[i].toUpperCase());
        }
        
    }
    return funcresult.join(''); 
    
}
    /*creez o functie care compara primul array cu al doile, daca primul e lowercase, return uppercase,  */


//Ex4
// Scrieti o functie care sa concateneze un string de cate ori ii zicem
// de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"
function stringMultiConcat(firstString,repeatTimes){
    var stringConcatin= "";
    while (repeatTimes > 0){
        stringConcatin += firstString;
        repeatTimes--;
    }
    return stringConcatin;
}
//Ex5
// A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word 'level'.
// Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante
function palindrome(unCuvant){
    var cuvantArr = unCuvant.split('');
    var cuvantArrReverse = cuvantArr.reverse();
    if ( unCuvant === cuvantArrReverse.join('')){
        return "Cuvantul este 'palindrome'";
    }
    else{
        return "is not polindrome"
    }
    
}


//Ex6
// Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si returneaza un array care 
//contine ca si elemente cele mai mari numere din fiecare array
function bigArray(){
    var a = [1, 2, 3, 5]; 
    var b = [1, 2, 3, 5];
    if(a.length != b.length){
        return "toate sirurile trebuie sa aiba aceiasi lungime!!!"
    } 
    else{
        for (i=0;i < a.length; i++){
            if (a[i] != b[i]){}
        }
    }

}
//Ex7
// Implementati o functie care face reverse la un string
function stringReverse(unString){
    var unStringToArr = unString.split("");
    var final = unStringToArr.reverse();
    return final.join("");
}

//Ex8 
// Implementati o functie care calculeaza factorialul unui numar

function factorialCalc(numFactorial){
    for (var  i = numFactorial - 1; i >= 1; i--){
        numFactorial *= i;}
        return numFactorial;
}
//Ex9
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma
/*compar daca al doilea string se regaseste in primul */

function functieStringCompare(stringul1,stringul2){
    if (stringul1.length < stringul2.length){
        return "Introdu si tu primul string mai mare :D";
    }
    var stringul2Lungime = stringul2.length;
    var stringul1Ultimul = stringul1.slice(-stringul2Lungime);
    if (stringul2 === stringul1Ultimul){
        return "Primul string se termina cu al 2-lea"
    }
    else{
        return "iesi afara!"
    }

}

//Ex10
// Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul element din array care 
//trece testul specificat
/*
un array cu numere , si o functie de exemplu care imi cauta nr pare, sau impare si mi le returneaza;
*/

function parOrImpar(numarulDinArr){
    if(numarulDinArr % 2 == 0)
        return "Par";
    return "Impar";
};
function oFunctie(unArray,functiaMea){
    for (var i = 0; i<unArray.length;i++){
        if(parOrImpar(unArray[i]) === "Par"){
            return "Ehehei "+unArray[i]+" e par ";
        }
    }
    return unArray + " nu contine numere pare";
    }
//Ex11
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele celui de-al doilea 
//string
/* */
function stringCompare(string1,string2){
    if (string1 === string2){
        return "toto bene"
    }
    else {
        return "bye-bye"
    }
}
stringCompare("abcd","abcd");
// Ex 12
// Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare element al array-ului pana 
//cand intalneste elementul cu valoarea specificata
function functieCautare(unArrai,oValoare){
    for (var i = 0;i < unArrai.length; i++){
        if (unArrai[i] === oValoare){
            return "Acest array contine valoarea " + oValoare;
        }
    }
    return "In acest array ["+ unArrai + "] nu se regaseste valoarea "+ oValoare;
}
// Ex 13
// Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN
function iarOFunctie(iarUnArray){ 
    resulFunctie = [];
var i = 0;
    while( i < iarUnArray.length){
        if ( !iarUnArray[i]){
            iarUnArray.slice[i,0];
        }
        else{
            resulFunctie.push(iarUnArray[i]);
        }
            i++;
    }
    return resulFunctie;
    
}

// Ex 14
// Scrieti o functie care repeta un string de n ori specificate
function stringRepeat(string,numarRepetari){
    return string.repeat(numarRepetari);
    }
