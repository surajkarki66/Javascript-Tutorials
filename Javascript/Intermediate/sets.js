// it is used to create set of any type

let myArray = [1, 2, 4, 23, 4];
let mySet = new Set(myArray);

// methods
mySet.add("100");
mySet.add("Suraj");
mySet.add(12);

mySet.delete("Suraj");
//mySet.clear();

console.log(mySet);
console.log(mySet.size);

// Loop through set

mySet.forEach(function (val) {
  console.log(val);
});

// Map -> It is a key value , Its like dictionary in python

let myMap = new Map([
  ["Name", "Suraj Karki"],
  ["Job", "ML Engineer"],
]);
myMap.set("Age", 20);
//myMap.delete('Age');
console.log(myMap);

// Weak set -> its the collection of objects

let bikeWeakset = new WeakSet();

let bike1 = {
  name: "Ninja",
  price: "1000 bucks",
};

bikeWeakset.add(bike1);

let bike2 = {
  name: "KTM duke",
  price: "1222 bucks",
};
bikeWeakset.add(bike2);

// Same way you can do weak maps
