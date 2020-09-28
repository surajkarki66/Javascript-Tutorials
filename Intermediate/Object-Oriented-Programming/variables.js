class Variables {
  // class variable
  classVariable = "I am a class.";

  constructor(instanceVariable) {
    // Instance variable
    this.instanceVariable = instanceVariable;
  }
  info() {
    return `class variable = ${this.classVariable} and instance variable = ${this.instanceVariable}`;
  }
}

v = new Variables("I am an instance.");
