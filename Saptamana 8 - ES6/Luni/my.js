//ex1 
function check() {
    let b = 2;
    console.log(b);
    {
        b = 3; // TODO inlocuiti linia asta de cod astfel incat sa avem ambele console.log-uri sa ruleze si sa printeze amandoua pe rand 2 si 3
        console.log(b);
    }
}
check();



/*
// Try to understand what happens and how to change things for finanl result to be 3 not 8.
function foo(){
    function bar() {
        return 3;//do not change this line
    }
    return bar();
    function bar() {
        return 8;// do not change this line
    }
}
console.log(foo()); return 8
*/
/*
// Try to understand what happens and how to change things for finanl result to be 3 not 8.
function foo(){
    function bar() {
        return 8;// do not change this line
    }
    function bar() {
        return 3;//do not change this line
    }
    return bar();
    
}
console.log(foo()); return 3
*/
/*
// Try to understand what happens and how to change things for finanl result to be 3 not 8.
function foo(){
    function bar() {
        return 3;//do not change this line
    
    
    function bar() {
        return 8;// do not change this line
    }}
    return bar();
}
console.log(foo()); return 8
*/



function outer() {
    var b = 10;
    function inner() {
        var a = 20; 
        console.log(a+b);
    }
    return inner;
}
 var firstTime = outer(); //outer() invoked the first time       ---return 30
 var secondTime = outer(); //outer() invoked the second time






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
else*/
    return false;

};
//Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS

function checkString(unString){
    unString2 = unString.slice(0,2);
console.log(unString2);
    if ( unString2 == "JS"){
        return unString;
    }
    else{
        return "JS" + unString;
    }
};
checkString('JSis');

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
removeDuplicates();

//Ex5
// Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'

const findLongestString = oFraza =>{
return oFraza.split(" ").sort(function(a,b){return b.length-a.length;})[0];
};
findLongestString();

//Ex6
//Scrieti o functie care sa aiba output-ul asta
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  
const incrementFunc = (unaCeva, deCateOri) => {
    let result = "";
    for (let i = 0; i < deCateOri ; i++) {
    result += " " + unaCeva;
    console.log(result);
};
return result;
};
incrementFunc("ceva", 4);






//ex7
const negativeNumbers = [];

function extractNegativeNumbers(numbers) {
    // append any negative numbers found in the numbers array 
    // into the negativeNumbers array constant variable above
 
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
    if (typeof pin !== "number" ) {
        return "introduceti un pin valid din cifre"
    };

    if (pin.length >= 4 || pin.length <= 6) {
        return "true";        
    }
    else{
        return "false";
    };
};
validPin();

//ex11 
//Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"
function removeVowels(introduCeva){
    let reg = /^[aeiou]$/i;
    return introduCeva.compile(reg);
}

//ex12
//Vreau sa am o functie care sa verifice daca un numar este patrat
// isSquareNumber(-1) => false
// isSquareNumber(25) => true
// isSquareNumber(3) => false


//ex13
// Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul string se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true
