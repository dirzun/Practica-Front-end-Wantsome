  // The Car and the Truck class have similar behavior and properties.
  // Rewrite them in a way such that they share those properties.

 /* var Vehicle = function(driver) {
    this.driver = driver;
    this.speed = 0;
    this.drive = function(mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    };
  };

  var Car = function(driver) {
    this.driver = driver;
    this.speed = 0;
    this.drive = function(mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    };
  };

  var Truck = function(driver) {
    this.driver = driver;
    this.speed = 0;
    this.cargo = [];
    this.drive = function(mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    };

    this.loadCargo = function(cargo) {
      this.cargo.push(cargo);
      return this;
    };

    this.unloadCargo = function() {
      return this.cargo.pop();
    };
  };

*/

  // The Car and the Truck class have similar behavior and properties.
  // Rewrite them in a way such that they share those properties.

  var Vehicle = function(driver) {
    this.driver = driver;
    this.speed = 0;
    this.drive = function(mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    };
  };

  var Car = function(driver) {
      this.prototype = new Vehicle(driver);
  };
  Car.prototype = new Vehicle();

  var Truck = function(driver) {
    this.prototype = new Vehicle(driver);
    this.cargo = [];
    this.loadCargo = function(cargo) {
      this.cargo.push(cargo);
      return this;
    };
    this.unloadCargo = function() {
      return this.cargo.pop();
    };
  };
Truck.prototype = new Vehicle();

const newTruck = new Truck("Ovidiu");
const newCar = new Car("Lucian");

  




