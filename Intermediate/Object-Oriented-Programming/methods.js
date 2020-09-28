class Methods {
  constructor() {
    console.log(Methods.staticMethod());
    // 'static method has been called.'

    console.log(this.constructor.staticMethod());
    // 'static method has been called.'
  }

  // Static methods
  static staticMethod() {
    return "Static method has been called";
  }
  static anotherStaticMethod() {
    return this.staticMethod() + " from another static method";
  }

  // Instance methods
  instanceMethod() {
    return "This is an instance method";
  }
}
Methods.staticMethod();
// 'Static method has been called'

Methods.anotherStaticMethod();
// 'Static method has been called from another static method'

//Calling instance method
s = new Methods();
s.instanceMethod();
