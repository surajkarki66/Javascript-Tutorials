const fetch = require("node-fetch");

const getFruit = require("./async-await");

const fruits = ["peach", "pineapple", "strawberry"];

const fruitLoop = async () => {
  for (const f of fruits) {
    const emoji = await getFruit(f);
    console.log(emoji);
  }
};

const fruitInspection = async () => {
  if ((await getFruit("peach")) === "🍑") {
    console.log("looks peachy!");
  }
};

const getTodo = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  const { title, userId } = await res.json();

  console.log(title, userId);
};

// Aysync call(micro task)
getTodo().then();

// Aysync call(micro task)
fruitInspection().then();

// Aysync call(micro task)
fruitLoop().then();

// Sync code
console.log("Synchronous code");
