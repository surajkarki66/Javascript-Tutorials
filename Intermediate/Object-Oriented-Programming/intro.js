// Everything is JS, is an object.
// Objects in JS are quite like objects in real life.
// They have properties and things they can do(methods)

var names = ["Binish", "Saman", "Suraj"];
// the var names is an array but actually behind the scene that names array is also an object
// It has properties like length and methods like forEach(), etc.

// window is global object which is also called mother of all objects in js.

// Example-1
var name = "Suraj Karki";
console.log(name.length);

// Behind the scene
var name2 = new String("Suraj Karki");
// name2 is an object.

// property
console.log(name2.length);

// Example-2
var num = 12.2343;
console.log(num.toFixed(2));

// Behind the scene
var num2 = new Number(12.2343);

// method
console.log(num2.toFixed(2));
