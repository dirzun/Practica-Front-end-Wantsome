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
function multiplyNumber(){

    for (i = 0; i < 11; i++){
        console.log(i*100);
    }

};
multiplyNumber();
