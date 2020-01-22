//Ex1
//Scrieti o functie multiplyByTen care atunci cand o apelam cu console.log(multiplyByTen(6)) sa avem 60 rezultat.
function multiplyByTen(numb){
return numb * 10;
}

//Ex2
//Scrieti o functie myNameIs care sa ia un singur parametru si cand o apelam cu numele nostru sa returneze "Numele meu este ___"
function myNameIs(nume){
  return "Numele meu este " + nume;
}

//Ex3 
//Scrieti o functie care sa transforme un numar in string.
function inString(solutie){
  return solutie.toString();
} 

//Ex4 
//Scrieti o functie care sa returneze patratul numarului pe care-l dam ca si argument.
function patratulNumarului(numarul){
  return numarul * numarul;
}

//Ex5
//Scrieti o functie numita aflaViitorul care sa aiba 4 parametrii -  numele jobului, compania, in cati ani, si cati bani - ar trebui sa returnam "Eu voi fi job in x ani la compania y si voi face z bani pe ora"
//Chemati/invocati/apelati acea functie de 3 ori cu diferite argumente.
function aflaViitorul(numeJob,numeCompanie,ani,salarPeOra){
  return "Eu voi fi " + numeJob + " in " + ani +" ani la compania " + numeCompanie + " si voi face " + salarPeOra + " z bani pe ora"
}

//Ex6
//Scrieti o functie care sa calculeze cati ani are o pisica in ani pisicesti avand in vedere ca 1 an de om = 7 ani de pisica.
// functia are 1 singur parametru - deci va accepta 1 singur argument.
// Rezultatul trebuie sa fie "Pisica mea are xx ani in ani pisicesti"
//BONUS - adaugati un alt parametru care reprezinta varsta noastra si obtinem la final varsta pisciii relatata la varsta noastra.
function catYears(varstaMea){
  return "Eu am " + varstaMea + " ani, iar in anii pisicesti insemnand " + varstaMea*7 + " ani." 
}
//Ex7
// Vreau sa scriu o functie ce sa calculeze pentru urmatorii X ani cate cani de cafea voi bea
// Functia accepta ca parametrii years si coffePerDay.
// Rezultatul va fi "In urmatorii X ani voi bea in total Y cani de cafea"
function caniPeAn(years,coffePerDay){
  return "In urmatorii " +years+ " ani voi bea in total " + years*(365*coffePerDay) + " cani de cafea."
}

//EX8 BONUS 
// Faceti 2 functii una calculateCelsiusToFarenheit() si una calculateFarenheitToCelsius() unde sa facem conversia dintre celsius si farenhite.
// rezultatul trebuie sa fie "X grade Celsius reprezinta Y grade Farenhite"
// folositi https://www.mathsisfun.com/temperature-conversion.html ca si referinta pentru calcul.

function calculateCelsiusToFarenheit(celsius){
  return celsius + " grade Celsius reprezinta " + ((celsius * 9/5) + 32) + " grade Farenhite.";
}
function calculateFarenheitToCelsius(farenheit){
  return farenheit + " grade Farenhite reprezinta " + ((farenheit - 32) * 5/9) + " grade Celsius.";
}






//part 2


//Ex1 : La ce index intalnim cuvantul 'trece', dar cuvantul 'javascript'? Scrieti si metodele folosite.
var str = "Daca te simti bine, nu te ingrijora, trece!";
//Raspuns: 
var strResult = str.indexOf('trece');   //37
var strResult2 = str.indexOf('javascript'); // -1
console.log(strResult);

// Ex2.0: Returnati stringul Kiwi folosind metoda slice() cu indexi pozitivi si apoi negativi.
// Ex 2.1: Returnati toate fructele incepand de la 'Lemon'.
  var fruits = "Apple, Lemon, Plum, Kiwi";
  var fruitResult = fruits.slice(20,24);
  var fruitNegaticeResult = fruits.slice(-5);
  var allFruitResult = fruits.slice(6);
  
// Ex 3: Returnati stringul 'Plum' folosind metoda substr()
  var moreFruits = "Apple, Lemon, Plum, Kiwi";
  var moreFruitsResult = moreFruits.substr(14,4);

// Ex 4: Inlocuiti 'Mia Kalifa' cu numele vostru folosind o metoda pe stringuri
// bonus: Inlocuiti "Sasha" cu numele vostru in tot stringul de mai jos.
  var replaceName = "Eu sunt Mia Kalifa, doctor docent in matematica";
  var replaceNameResult = replaceName.replace("Mia Kalifa", "Nicu");
  var bonusName = "Sasha este o persoana de nota 10, Sasha invata javascript(mai nou)";
  var bonusNameReplaceResult = bonusName.replace(/Sasha/gi , "Nicu");       
  /*
  /g -global
  /gi case-insensitive
   */
// Ex5: Vreau ca toate literele sa fie intai cu caractere mici si apoi cu caractere mari
  var text = "24 de orE intr-o zi, 24 de beRi intr-o lAda. Vreo coincidenta?"
  var textUpperCase = text.toUpperCase();
  var textLowerCase = text.toLowerCase();
// Ex6: Vreau sa am la final un singur string cu toate celalte stringuri (indentati calumea, cu spatii unde e nevoie)
  var text1 = "Când ai un";
  var text2 = "ciocan";
  var text3 = "in mana toate lucrurile ti se par";
  var text4 = "cuie";
var stringText = text1 + " " + text2 + " " + text3 + " " + text4 + ".";
// Ex7: Vreau sa stiu intai ce litera se afla pentru indexul 6, apoi ce unicode are aceasta litera, si apoi vreau sa o accesez cu 'property access'
  var word = "Mamaliga";
  var letterByPosition = word.charAt(6);
  var unicodeResult = word.charCodeAt(6);
  var propertyAccesResult = word[6];

// Ex8: Vreau sa am o noua variabla care sa cotina un array format din toate stringurile de mai jos care sunt despartite de '|'
  var cars = "Toyota|Mazda|Tesla|Hyundai|Dacia";
  var arrayFormat = cars.split('|');
  
//Big BONUS 
// Se dau variabilele de mai jos, vreau sa ajung la rezultatul "NU EXISTA INTREBARI PROASTE" fara sa modific valorile celor 2 variabile;
  var firstWord = 'Nu exista';
  var secondWord = 'raspunsuri proaste';
  var firstAndSecondResult = firstWord.toUpperCase() + " " + secondWord.replace("raspunsuri","INTREBARI").toUpperCase();
