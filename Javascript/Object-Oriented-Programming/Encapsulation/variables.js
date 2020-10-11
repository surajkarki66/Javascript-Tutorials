//////////////////////// Protected variables //////////////////////////////

class CoffeeMachine {
  // Protected class variable
  _waterAmount = 0;

  constructor(power) {
    // Protected instance variable
    this._power = power;
  }

  set waterAmount(value) {
    if (value < 0) throw new Error("Negative water");
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }
  get power() {
    return this._power;
  }
}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

// add water
//coffeeMachine.waterAmount = -10; // Error: Negative water
//coffeeMachine.power = -200;

// accessing power
console.log(coffeeMachine.power);

/////////////////////////////////// Private variables ////////////////////////////////////
class PrivateCoffeeMachine {
  // Private class variable
  #waterAmount = 0;

  constructor(name) {
    // Private instance variable
    this.#name = name;
  }

  // getters
  get waterAmount() {
    return this.#waterAmount;
  }

  // setters
  set waterAmount(value) {
    if (value < 0) throw new Error("Negative water");
    this.#waterAmount = value;
  }
}

let machine = new PrivateCoffeeMachine("Machine");

// Static variables
class ClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD;

  static publicStaticMethod() {
    ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD = 42;
    return ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD;
  }
}
console.assert(ClassWithPrivateStaticField.publicStaticMethod() === 42);
