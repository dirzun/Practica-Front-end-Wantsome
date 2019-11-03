//ex.1
function functieDeVerificare(valoare){
    if (typeof valoare !== 'number') {
        return 'iesi afara';        
    }
    var text;
    for  (i = 0; i < valoare; i++){
        text += "Sunt la iteratia numarul" + i;
    console.log(text);
    }

}
//v2
function functieDeVerificareV2(valoare){
    if (typeof valoare !== 'number') {
        return 'iesi afara';        
    }
    var text;
    var i = 0;
    while  (i < valoare){
        text += "Sunt la iteratia numarul" + i + "</br>";
        i++;
        console.log(text);
    }

}

//ex.2
var germanCars = ['Volkswagen','Opel','Porsche','Mercedes','Mini','Audi','Smart'];
var informatii = "In acest array sunt: "
/* function myArray(unArray){

    for (i = 0; i < unArray.length; i++ ){
        informatii += unArray[i] + " ," ;
        console.log(informatii);
    }
}
myArray(germanCars);
*/

/*
function myArray2(unArray2){
    i = 0;
    while (i < unArray2.length){
        informatii += unArray2[i] + ",";
        i++;
        console.log(informatii);
    }
}
myArray2(germanCars);
*/

//ex.3
var cat = {
    name : 'Vasile',
    model : 'shorhair',
    age : 30,
    altele : " e rea"
};
var userInfoText = "Detaliile utilizatorului sunt: ";
/*
function objectAr(unobj1){

    for ( var key in cat){
        userInfoText += key + ":" + cat[key] + ",";
        console.log(userInfoText);
    }
}
objectAr(cat);
*/
/*
function objectAr2(unobj1){
    var catKeys = Object.keys(unobj1);
    var catValue = Object.values(unobj1);
    i = 0;
    while (i < catKeys.length){
        userInfoText += catKeys[i] + " : " +catValue[i]+" ";
        i++;
        console.log(userInfoText);
    }
};
objectAr2(cat);
*/


//ex.4 
//v1
function multiplyNumber(){

    for (i = 0; i < 11; i++){
        console.log(i*100);
    }

};
multiplyNumber();

//v2
function multiplyNumber2(){

    for (i = 1; i < 256; i*=2){
        console.log(i);
    }

};
multiplyNumber2();

//v3
function multiplyNumber3(){

    for (i = 0; i < 6; i++){
        console.log(i*2);
    }

};
multiplyNumber3();

//v4
function multiplyNumber4(){

    for (i = 3; i < 16; i+=3){
        console.log(i);
    }

};
multiplyNumber4();

//v5
function multiplyNumber5(){

    for (i = 9; i >= 0; i--){
        console.log(i);
    }

};
multiplyNumber5();

//v6
function multiplyNumber6(){

    for (i = 1; i <= 4; i++){
        console.log(i);
    }

};
multiplyNumber6();
