function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
  this.login = function () {
    console.log(this.email, "has logged in !");
  };
}

// Creating objects

let userOne = new User("tech@lead.com", "techlead");
let userTwo = new User("Suraj@test.com", "Michael");

console.log(userOne);
console.log(userTwo);
