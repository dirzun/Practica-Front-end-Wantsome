// Ex1
// Creati un obiect "car"
// Adaugati proprietatea name si valoarea Tesla
// Adaugat proprietatea wheels si valoarea 4
// Schimbati valoarea name sa fie Mercedes
// Stergeti proprietatea name

var car = {
    name: "Toyota",
    wheels: 4  
  };
  car.name = "Mercedes";
  delete car.name;
  console.log(car.name);
  
  //Ex2
  // Creati un obiect cu 4 proprietati
  // Stocati "key"-urile intr-o variabila noua
  // intr-o alta variabila vreau sa am toate key-urile cu litere mari
  // Stocati valorile intr-o variabila noua
  // intr-o alta variabila vreau sa am toate valorile cu litere mici
  // vreau la final sa ma rezultatul un singur string care sa contina o fraza de genul "proprietatea1 proprietatea2 proprietatea3 proprietatea4 reprezinta ceva"
  
  var objects = {
    prop1:"Proprietare1",
    prop2:"Proprietare2",
    prop3:"Proprietare3",
    prop4:"Proprietare4"
  }
  var objKeys = Object.keys(objects);
  
  var bigobj = objKeys.toString().toUpperCase();
  console.log(bigobj);
  
  var objValues = Object.values(objects);
  
  var smallobj = objValues.toString().toLowerCase();
  console.log(smallobj);
  
  
  var conobj = bigobj.concat(smallobj);
  console.log(conobj);
  
  //Ex3
  // Creati un obiect  cu 3 proprietati si una dintre ele sa reprezinte o  metoda
  // Metoda din obiect vreau sa returneze sau sa printeze (console.log()) prima valoare impreuna cu a doua valoare.
  var obiect3 = {
    pro1:"vasile",
    pro2:"caruta",
    pro3:function (){
      console.log(this.pro1 + " cu " + this.pro2);
    }
  }
  console.log(obiect3.pro3());
  //Ex4 
  // Creati un obiect cu cateva proprietati
  // "Copiati" obiectul printr-o metoda specifica obiectelor(vedeti pe google) si stocatil intr-o alta variabila
  // Pe obiectul nou adaugam 2 noi proprietati
  // Avem obiectul de mai jos, folosind o metoda pe obiecte faceti "merge" intre cele 2 obiecte si salvati-l sub un nume nou.
  var myHouse = { 
    rooms: 3,
    zone: "Bucium",
    animals: 1
  }
  var myCocioaba = myHouse;
  myCocioaba.covoare = 20;
  myCocioaba.narghila = "doua";
var myPenthouse = {myHouse,myCocioaba};

  
  // Ex5 
  // Creati un obiect care sa contina un alt obiect in interorul lui cu 2 proprietati
  // Accesati proprietatile acelui obiect si stocati key-le intr-o variabila separata.
  // transformati arrayul intr-un singur string care sa rezulte "proprietatea1 si proprietatea2 apartin obiectului x"
  var myCat = {
    name : "Andrew",
    status : "dead",
    age : 20,
    avere : {
      mancare : "2 saci",
      altele : "2 purici"  
    },
  }
  var keyys2 = Object.keys(myCat.avere);
  var newKeysTransform = keyys2.toString() + "apartin obiectului " + Object.values(myCat).slice(0,1);
  //Object.keys(myCat).slice(0,1);


  //Ex6
  // Avem obiectul : 
  myObject = {
  name: "John",
  surname: "Applegate",
  }

  //Adaugati o metoda care sa sorteze cele 2 valori ale numelui.
  var sortare = Object.values(myObject);
  sortare.sort();



  //Ex7 
  //Faceti o functie constructor
  // Cu functia constructor creati 3 obiecte cu valori diferite
  // Pentru toate valorile din acele obiecte transformatile in litere mari.
var obiect = new Object();
obiect.obiect1 = 29;
obiect.obiect2 = "masina";
obiect.obiect3 = 12 + "ani";
var stocareKey = Object.keys(obiect).toString().toUpperCase();
