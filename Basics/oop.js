// Class
class Car
{
    constructor(name,price)
    {
        this.name = name;
        this.price = price;
    }

    // Methods

    info()
    {
        return `${this.name} worth ${this.price}`;
    }

    // Static method
    static car()
    {
        return "This method is accessed by class not object.";
    }

}

car1 = new Car("Audi",12000000);
console.log(car1);
console.log(car1.name,car1.price);
console.log(car1.info());
console.log(Car.car());


// Inheritance   keywords-> extends

class Bike {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  // Derived Class
  class Model extends Bike {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  mycar = new Model("Ford", "Mustang");

