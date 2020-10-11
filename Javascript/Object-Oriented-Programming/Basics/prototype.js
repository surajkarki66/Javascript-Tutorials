// Every object type has prototype,eg: array object has prototype, string object has prototype
// Actually all methods of a particular user is lives inside __proto__ object.
//

// The below function is constructor function.
function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
}

// Creating methods in __proto__
User.prototype.login = function () {
  this.online = true;
  console.log(this.email, "has logged in !");
};

User.prototype.logout = function () {
  this.online = false;
  console.log(this.email, "has logged out !");
};

// Inheritance
function Admin(...args) {
  User.apply(this, args);
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function (u) {
  users = users.filter((user) => {
    return user.email != u.email;
  });
};

// Creating objects

var userOne = new User("ryu@ninjas.com", "Ryu");
var userTwo = new User("yoshi@mariokorp.com", "Yoshi");
var admin = new Admin("shaun@ninjas.com", "Shaun");

var users = [userOne, userTwo, admin];

console.log(userOne);
console.log(userTwo);
