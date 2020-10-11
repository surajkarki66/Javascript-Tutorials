// Create an array
let fruits = ["Apple", "Banana"];
console.log(fruits.length);

// Access an Array item using the index position
let first = fruits[0];
let last = fruits[fruits.length - 1];

console.log(first);
console.log(last);

// Loop over an array
fruits.forEach(function (item, index, array) {
  console.log(index, item);
});

// Add an item to the end of an Array
let newLength = fruits.push("Orange");
console.log(newLength);

// Remove an item from the end of an Array
let lastPop = fruits.pop();
console.log(lastPop);

// Remove an item from the beginning of an Array
let lastShift = fruits.shift();

// Find the index of an item in the Array
fruits.push("Mango");
console.log(fruits);

let pos = fruits.indexOf("Banana");
console.log(pos);

// Remove an item by index position
let removedItem = fruits.splice(pos, 1); // remove 0th element and delete one element.
console.log(removedItem);

// Copy an array
let shallowCopy = fruits.slice();
console.log(shallowCopy);

let arr = [
  "this is the first element",
  "this is the second element",
  "this is the last element",
];
console.log(arr[0]); // logs 'this is the first element'
console.log(arr[1]); // logs 'this is the second element'
console.log(arr[arr.length - 1]); // logs 'this is the last element'

console.log(Object.keys(fruits));

let newArray = new Array("Car", "Bike");
console.log(newArray);

// Array  prototype constructor
// The prototype constructor allows you to add new properties and methods to the Array() object.

// When constructing a property, ALL arrays will be given the property, and its value, as default.

// When constructing a method, ALL arrays will have this method available.

// Note: Array.prototype does not refer to a single array, but to the Array() object itself.

// Note: Prototype is a global object constructor which is available for all JavaScript objects.

// Make a new array method that transforms array values into upper case:
Array.prototype.upperCase = function () {
  for (i = 0; i < this.length; i++) {
    // this refers to array
    this[i] = this[i].toUpperCase();
  }
};

let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.upperCase();
console.log(fruits2);
