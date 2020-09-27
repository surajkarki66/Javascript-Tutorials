/*
A closure is the combination of a function bundled together (enclosed) with references to
its surrounding state (the lexical environment). In other words, a closure gives you access
to an outer function’s scope from an inner function. In JavaScript, closures are created every
time a function is created, at function creation time.
*/

// Lexical scoping
// Nested functions have access to variables declared in their outer scope.

function init() {
  let name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function
  }
  displayName();
}
init();

// Closure
function makeFunc() {
  let name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

// This works because The reason is that functions in JavaScript form closures

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
