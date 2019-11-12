//Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
//ex myFunction(10, 5) - output 15 // myFunction(10,10) - output 100

function myFunction(numar,numar2){
    if (numar != numar2){
        return numar + numar2;
    }
    else {
        return (numar + numar2)*5;
    }
};
//Ex2
//Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
//ex testFunction(30, 30) - true 
//testFunction(15,15) - true
//testFunction(10, 15) - false

function testFunction(nr1,nr2){
    if (nr1 === 30 && nr2 === 30 || (nr1 + nr2) === 30){
    return true;
}
/* else if (nr1 === 30 && nr2 === 30 && (nr1 + nr2) === 30){
    return true;
}
else */
    return false;

};
//Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS

function checkString(unString){
    unString2 = unString.slice(0,2);
    if ( unString2 == "JS"){
        return unString;
    }
    else{
        return "JS" + unString;
    }
};
// checkString('JSis');

//Ex4     ----------------------------------------------------------------------
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234
//replace metode
//algoritm de cautare(dinara,)

function removeDuplicates(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) == -1) {
            newArray.push(array[i])
        }
    }
    return newArray
};
//removeDuplicates();

//Ex5
// Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'

const findLongestString = oFraza =>{
return oFraza.split(" ").sort(function(a,b){return b.length-a.length;})[0];
};
//findLongestString();

//Ex6
//Scrieti o functie care sa aiba output-ul asta
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  

const incrementFunc = (unaCeva, deCateOri) => {
    let resultIncrement = " ";
    for (let i = 0; i < deCateOri ; i++) {
    resultIncrement += " " + unaCeva;
};
return resultIncrement;
};
incrementFunc();






//ex7
const negativeNumbers = [];

function extractNegativeNumbers(numbers) {
    // append any negative numbers found in the numbers array 
    // into the negativeNumbers array constant variable above\
    for(i=0; i< numbers.length; i++){
        if (numbers[i] < 0) {
            negativeNumbers.push(numbers[i]);
        };
        }
    return negativeNumbers;
};
extractNegativeNumbers([1,2,-5,4,-6]);

//ex8
//Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
//ex calculate(2, 5, "add") => 7
//calculate(10, 8, "substract") => 2
function calculate(nr1,nr2, chose_add_substract_multiply_divide){
    switch (chose_add_substract_multiply_divide){
        case  "add":
            return nr1 + nr2;
            break;
        case  "substract":
            return nr1 - nr2;
            break;
        case  "multiply":
            return nr1 * nr2;
            break;
        case  "divide":
                return nr1 + nr2;
                break;
        default:
            return "Operator necunoscut, va rog alege-ti un operator din lista!"
        }
}
calculate(2, 5, "add");

//Ex9
// Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7

function isDiv(numarulMagic){
    if (numarulMagic % 3 === 0 && numarulMagic % 5 === 0){
        return "BOTH";
    }
    else if(numarulMagic % 5 === 0){
        return "FIVE";
    }
    else if 
        (numarulMagic % 3 === 0){
            return "THREE";
    }
    else {
        return numarulMagic;
    }
}
isDiv();


//Master exercises
//Ex9 
// Vreau sa pot afisa data si ziua sub urmatorul format:
// Azi este : Luni. 
// Ora este : 20 PM : 30 : 38

function aboutToday(){
    let day = ["Duminica" ,"Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata" ];
    let time = new Date();
    return "Azi este : " + day[time.getDay()] + "\n" + "Ora este : " + time.toLocaleString('en-US', { hour: 'numeric', hour12: true }) + " : " + time.getMinutes() + " : " + time.getSeconds();

}
console.log(aboutToday());
//ex10
// ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
// validPin("1234") => true
// validPin("12345") => false
// validPin("z23f") => false

function validPin(pin){
    if (typeof pin === 'string'){ pin = Math.floor(pin); }
    let pinString = pin.toString();
    if (typeof pin === 'number' && pinString.length >= 4 && pinString.length <= 6){
    return true}
    else{ return false;}
};
validPin();

//ex11 
//Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"
function removeVowels(introduCeva){
    let reg = /[aeiou]/g;
    return introduCeva.toLowerCase().replace(reg, '');
};
removeVowels();
//ex12
//Vreau sa am o functie care sa verifice daca un numar este patrat
// isSquareNumber(-1) => false
// isSquareNumber(25) => true
// isSquareNumber(3) => false
function isSquareNumber (numrr){
    return  numrr > 0 && Math.sqrt(numrr) % 1 === 0;
}

//ex13
// Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul string se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true

//inca nu e gata

function isAnagram(stringul1,stringul2){
    let string1Arr = stringul1.toLowerCase().replace(/[' ']/g, '').split("").sort().join(''); 
    let string2Arr = stringul2.toLowerCase().replace(/[' ']/g, '').split("").sort().join('');
    if (string1Arr.length !== string2Arr.length) {
        return " Numarul de caractere trebuie sa fie la fel";
    }
    
    if (string1Arr === string2Arr){
        return true;
    } else { return false;}
}
isAnagram();
/*
-string sa-l transf in array
-
*/
