// Private instance method
class ClassWithPrivateMethod {
  // private method
  #privateMethod() {
    return "hello world";
  }

  // public method
  getPrivateMessage() {
    return this.#privateMethod();
  }
}

const instance = new ClassWithPrivateMethod();
console.log(instance.getPrivateMessage());

// Private static method

class ClassWithPrivateStaticMethod {
  static #privateStaticMethod() {
    return "this is a private static method.";
  }

  static publicStaticMethod() {
    return this.#privateStaticMethod();
  }
}

const i = new ClassWithPrivateStaticMethod();
