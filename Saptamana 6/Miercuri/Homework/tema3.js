/*3. Scrieti o functie care accepta ca argument numele marcii unei masini si returneaza
un text de forma: "Marca [marca] se produce in [tara]". Trebuie sa aveti macar 6 cazuri.
In cazul in care functia nu recunoaste marca, va returna "Marca este necunoscuta.
" Scrieti codul in 3 variante diferite. In declararea functiei trebuie sa se regaseasca o functie anonima.
Una dintre implementari trebuie sa fie bazata pe Object Literals ( read:  https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals ) */



// v1 inceput
/*
function checkCar(marca){
    var germanCars = ['Volkswagen','Opel','Porsche','Mercedes','Mini','Audi','Smart'];
    var czechCars = ['Skoda'];
    var franceCars = ['Citroen','Peugeot','Renault'];
    var romaniaCars = ['Dacia','Aro'];
    var japanCars = ['Honda','Lexus','Mazda','Mitsubishi','Nissan','Suzuki','Subaru','Toyota'];
    var koreanCars = ['Hyundai','Kia'];
    //omiterea erorii de scriere = pe viitor apeland datele dintr-un excel sau baza de date automat prima litera se va fi cu majuscula;
    var marcalower = marca.charAt(0).toUpperCase() + marca.slice(1);

function tara(marcalower){
if (germanCars.includes(marcalower)) {
    return 'Germany';
}
else if (czechCars.includes(marcalower)) {
    return 'Czech';
}
else if (franceCars.includes(marcalower)) {
    return 'France';
}
else if (romaniaCars.includes(marcalower)) {
    return 'Romanian';
}
else if (japanCars.includes(marcalower)) {
    return 'Japan';
}
else if (koreanCars.includes(marcalower)) {
    return 'Korea';
}
else {
    return false;
}
}
// in caz ca marca este necunoscuta
if (tara(marcalower) === false) {
        return "Marca este necunoscuta";
}
return ( 'Marca ' + marca + ' se produce in ' + tara(marcalower) );
}
*/
//v1 sfarsit


// v2 inceput
/*
function checkCar(marca){
    var carBase = {
        Germany : ['Volkswagen','Opel','Porsche','Mercedes','Mini','Audi','Smart'],
        Czech : ['Skoda'],
        France : ['Citroen','Peugeot','Renault'],
        Romania : ['Dacia','Aro'],
        Japan : ['Honda','Lexus','Mazda','Mitsubishi','Nissan','Suzuki','Subaru','Toyota'],
        Korean : ['Hyundai','Kia']
    }
    var marcalower = marca.charAt(0).toUpperCase() + marca.slice(1);

    var tara = function(marcalower){
        switch(true){
            case (carBase.Germany.includes(marcalower) ):
                return  "Germany";
                break;
                
            case (carBase.Czech.includes(marcalower) ):
                return  "Czech";
                break;
            case (carBase.Japan.includes(marcalower) ):
                return  "Japan";
                break;
            case (carBase.Japan.includes(marcalower) ):
                return  "Japan";
                break;
            case (carBase.Japan.includes(marcalower) ):
                return  "Japan";
                break;
            case (carBase.Japan.includes(marcalower) ):
                return  "Japan";
                break;

                default : return false;
        }   
    }

    if (tara(marcalower) === false) {
        return "Marca este necunoscuta";
    }
    return ( 'Marca ' + marca + ' se produce in ' + tara(marcalower) );
}

*/
//v2 sfarsit


//v3 object literals
