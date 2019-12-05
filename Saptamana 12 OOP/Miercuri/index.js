//1. Creati o clasa Person care sa aiba firstName si lastName in constructor
//2.aduagati o metoda displayPersonName care sa returneze numele complet
//3. creati o persoana cu noua clasa unde dati un nume si-un prenume si apelati metoda respectiva
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  displayPersonName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}
let one = new Person('musi', 'pusy');
//one.displayPersonName();



//1. Creati o clasa Animal care sa aiba in constructor name si weight
//2. Creati urmatoarele metode: eatFood, sleep, weakingUp - fiecare metoda o sa returneze un string '$name is eating' '$name is sleeping' '$name is weaking up'
//3. Creati o clasa noua care sa faca extend la clasa Animal si sa ia numele si weight-ul de la el(tip: super) - ex: class Elephant, class Lion etc
//4. Adaugati 4 metode noi:
//   walking - $name is walking
//   rage - $name is rageing 
//   showBehaviour - returnati metodele eatFood si rage
//   dailyRoutine - returnati metodele weakingUp, rage, eatFood si sleep

//5. Creati o constanta noua din clasa cu numele de animal pe care ati scris-o mai sus
//( NU DIN clasa Animal ci din clasa Elephant, Monkey, Lion etc etc);
//6. Accesati toate cele 4 metode de pe noul animal. 
class Animal {
    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    }
    eatFood(){
        console.log(`${this.name} is eating`);
    }
    sleep(){
        console.log(`${this.name} is sleeping`);
    }
    weakingUp(){
        console.log(`${this.name} is weaking up`);
    }
}
class ClasaNoua extends Animal{
    constructor (name, weight){
        super(name,weight);
    }
    walking(){
        console.log(`${this.name} is walking`);
    }
    rage(){
        console.log(`${this.name} is rageing`);
    }
    showBehaviour(){
        return `${this.eatFood()} ${this.rage()}`;
        
    }
    dailyRutine(){
        return `${this.weakingUp()} ${this.rage()} ${this.eatFood()} ${this.sleep()}`
    }
}

let Cat = new ClasaNoua("pisi", "pis");
Cat.dailyRutine();




//1. creati o clasa Account care sa aiba location si name la constructor
//2. creati o clasa Transaction care sa aiba sender, bank, amount si reference la constructor
//2.1 - clasa Transaction sa aiba un getter finalSum() care sa scada din amount 10;
//3. creati o clasa Table care sa aiba in cunstructor un array gol transactions
//3.1 Clasa Table sa aiba o metoda addTransaction unde sa putem adauga 
//tranzactiile pe care o sa le creem mai tarziu
class Account {
    constructor(location,name){
        this.location = location;
        this.name = name;
    }
}
class Transaction {
    constructor(sender,bank,amout,reference){
        this.sender = sender;
        this.bank = bank;
        this.amout = amout;
        this.reference = reference;
    }
    finalSum(){
         this.amout = this.amout - 10;
         
    }
    get getAmount() {
        return this.amout;
    }
}

class Table {
    constructor(){
    this.transactions = [];
    }
    addTransaction(...transaction) {
        this.transactions.push(...transaction)
    }
}

let transaction1 = new Transaction('Trump', 'ING', 3500, '09988766');
let transaction2 = new Transaction('Dragnea', 'BT', 12000, '09912766');
let transaction3 = new Transaction('Mama', 'Raiffeisen', 500, '45688766');

// const bankAccount = ...;
const table = new Table();
table.addTransaction(transaction1, transaction2, transaction3);
console.log(table);

