/* 
1. Scrieti o functie sub forma named function care accepta ca argument un CNP si verifica sexul unei persoane.
In urma apelului acestei functii, se va returna un text de forma "Persoana verificata este de sexul M/F".
*/

function verificareSex(cnp){
//verificam daca cnp-ul introdus este de tip number si nu altul
// !!!!!!!!!!!!!!nu stiu dece daca introduc mai multe litere de exemplu nu-mi afiseaza ca e gresit!!!!!!!!!!!!!!!!!
    if (typeof cnp != 'number') {
        return "CNP-ul a fost introdus gresit, introdu doar codul numeric.";
    }
//connvertim un numar in string ca sa putem folosi primul elemnt din argumentul introdus
    var numberToString =  cnp.toString(); 
// verificam lungimea cnp, care terbuie sa fie strict 13 caractere
    if (numberToString.length != 13) {   
    return "Ai introdus gresit CNP-ul.";  // persoana a introdus gresit datele
    }

//extragem doar primul element din string 
    var primulElement =  numberToString.charAt(0);         
// comparam valoare primului element conform normelor stabilite de statului Roman https://ro.wikipedia.org/wiki/Cod_numeric_personal 
    if (primulElement == 1 || primulElement == 3 || primulElement == 5 || primulElement == 7 ) {   
        return "Persoana verificata este de sexul M.";
    }
    else if (primulElement == 2 || primulElement == 4 || primulElement == 6 || primulElement == 8 ) {
        return "Persoana verificata este de sexul F.";
    }
    else { return "Ai introdus gresit CNP-ul."; }
}
