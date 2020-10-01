const fetch = require("node-fetch");

const promise = fetch('https://jsonplaceholder.typicode.com/todos/1');

// micro task.
promise
  .then(res => res.json()) // this also returns Promise
  .then(todo => {
    //throw new Error('uh oh');
    return todo;
  })
  .then(todo => console.log('😛', todo.title))
  .catch(err => console.error('😭', err));

// Synchronous code.
console.log('🥪 Synchronous');
