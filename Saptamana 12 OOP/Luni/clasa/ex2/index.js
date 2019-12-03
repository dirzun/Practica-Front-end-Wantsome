var Person = function() {
	this.smth = 0;
};

Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
}

const Trainer = function(subject) {
/* this.prototype = new Person(); */ // used for passing parameters to parent class constructor
  
  // ce e in plus si specific pt un Trainer urmeaza
  this.subject = subject;

	this.teach = () => {
  	console.log(`${this.name} is now teaching ${this.subject}`);
  }
}

Trainer.prototype = new Person();

const lucian = new Trainer("js");
lucian.initialize("Lucian", 34);
lucian.teach();

//Creati un obiect numit Trainer care sa fie derivat din obiectul Person si implementati o metoda teach() ce primeste un string numit subject si printeaza
// [nume trainer] is now teaching [subject]
