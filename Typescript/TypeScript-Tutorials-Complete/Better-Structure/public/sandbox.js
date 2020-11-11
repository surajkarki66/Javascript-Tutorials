"use strict";
// // Any type => you can change the type.
// console.log("Any Type:");
// let age: any = 10;
// console.log(age);
// age = true;
// console.log(age);
// age = { name: "Lynda" };
// console.log(age);
// let mixed: any[] = [];
// mixed.push(5);
// mixed.push("Hello");
// mixed.push(true);
// console.log(mixed);
// console.log("");
// // optional argument.
// const add = (a: number, b: number, c: number | string = 10) => {
//   console.log(a + b);
// };
// //add(5, 10)
// //add(10, 15, "Hello");
// // Union Types
// console.log("Union Types:");
// const logDetails = (uid: string | number, item: string) => {
//   console.log(`${item} has a uid of ${uid}`);
// };
// const greetPeople = (user: { name: string; uid: string | number }) => {
//   console.log(`${user.name} says hello`);
// };
// logDetails(12, "Item");
// greetPeople({ name: "Suraj", uid: 1 });
// console.log("");
// // Type aliases
// console.log("Type Aliases:");
// type StringOrNum = string | number;
// type ObjWithName = { name: string; uid: StringOrNum };
// const greetAgain = (user: ObjWithName) => {
//   console.log(`${user.name} says hello`);
// };
// const logDetailsAgain = (uid: StringOrNum, item: string) => {
//   console.log(`${item} has a uid of ${uid}`);
// };
// logDetailsAgain(1, "Item2");
// greetAgain({ name: "Binish", uid: 2 });
// console.log("");
// //  Function Signature
// console.log("Function Type:");
// let greet: (a: string, b: string) => void;
// greet = (name: string, greeting: string) => {
//   console.log(`${name} says ${greeting}`);
// };
// let calc: (a: number, b: number, c: string) => number;
// calc = (num1: number, num2: number, action: string) => {
//   if (action === "add") {
//     return num1 + num2;
//   } else {
//     return num1 - num2;
//   }
// };
// let log_details: (obj: { name: string; age: number }) => void;
// log_details = (ninja: { name: string; age: number }) => {
//   console.log(`${ninja.name} is ${ninja.age} years old.`);
// };
// greet("Suraj", "Hello");
// console.log(calc(1, 2, "add"));
// log_details({ name: "Suraj", age: 21 });
// console.log("");
