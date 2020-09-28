// Classes in javascript are like blueprints.
class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
  }

  login() {
    console.log(this.email, "just logged in!");
    return this;
  }
  logout() {
    console.log(this.email, "just logged out!");
    return this;
  }
  updateScore() {
    this.score++;
    console.log(this.email, "score is now", this.score);
    return this;
  }
}

let userOne = new User("joma@tech.com", "Joma");

// the 'new' keyword
// - creates a new object {}
// - sets the value of this to be the new empty object.
// - calls the constructor method.

userOne.login();
userOne.logout();
userOne.updateScore();

// method chaining
userOne.updateScore().updateScore().logout();

// Inheritance

class Admin extends User {
  deleteUser(user) {
    user = users.filter((u) => {
      return u.email !== user.email;
    });
    return user;
  }
}

let userTwo = new User("tech@lead.com", "techlead");
let admin = new Admin("Suraj@test.com", "Michael");

const users = [userOne, userTwo, admin];

admin.login();
console.log(admin.deleteUser(userOne));
admin.logout();
