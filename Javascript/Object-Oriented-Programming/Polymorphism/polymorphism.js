// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }
  eats() {
    console.log(this.name, "eats food.");
  }
}

// Derived class
class Alligator extends Animal {
  constructor(name) {
    // calling base class constructor
    super(name);
  }
  eats() {
    //calling base class eats() method
    super.eats();
    console.log(this.name, "eats fishes.");
  }
}
