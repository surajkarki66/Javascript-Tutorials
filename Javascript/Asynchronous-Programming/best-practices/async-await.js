// Basic
const getFruit = async (name) => {
  const fruits = {
    pineapple: "🍍",
    peach: "🍑",
    strawberry: "🍓",
  };

  // if you dont use async keyword in front of function
  //return Promise.resolve(fruits[name]);

  // If you use async keyword
  return fruits[name];
};

// Micro task
//getFruit("pineapple").then((v) => console.log(v));

// Synchronous code
//console.log("Finished !");

// Async + Await
const makeSmoothie = async () => {
  // await keyword pause the execution of a function until the getFruit function resolves the promise.
  // Here first we get pineapple and after some time we get strawberry
  const a = await getFruit("pineapple");
  const b = await getFruit("strawberry");

  return [a, b];
};

// This is alternative to above code.
const makeSmoothie2 = () => {
  let a;
  return getFruit("pineapple")
    .then((v) => {
      a = v;
      return getFruit("strawberry");
    })
    .then((v) => [a, v]);
};

module.exports = getFruit;
