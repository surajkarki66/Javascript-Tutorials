// It can be useful for a function to accept any number of arguments
// The rest parameter syntax allows us to represent an indefinite number
// of arguments as an array.

function max(...numbers) {
  // here numbers is an array of arguments.
  let result = -Infinity;
  for (let num of numbers) {
    if (num > result) {
      result = num;
    }
  }
  return result;
}

console.log(max(4, 1, 9, -2)); // ans: 9

function sum(...theArgs) {
  const result = theArgs.reduce((previous, current) => {
    return previous + current;
  });
  return result;
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10

// Ordinary parameter and rest parameter.
function multiply(multiplier, ...theArgs) {
  //console.log(arguments);
  const result = theArgs.map((element) => {
    return multiplier * element;
  });
  return result;
}

let arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
