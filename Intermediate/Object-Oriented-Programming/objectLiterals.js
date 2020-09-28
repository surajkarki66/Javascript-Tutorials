// Object literal => {}
var userOne = {
  // Properties
  email: "tech@tech.com",
  name: "Tech Lead",

  // Methods
  login() {
    console.log(this.email, "has logged in");
  },
  logout() {
    console.log(this.email, "has logged out.");
  },
};
console.log(userOne);

// To change properties
userOne.name = "Joma";

// Alter => This is dynamic
var key = "email";
userOne[key] = "Lie@tech.com";

// Creating new properties
userOne.age = 20;

console.log(userOne);

// Creating new methods
userOne.info = function () {};

// Best way to construct objects.
