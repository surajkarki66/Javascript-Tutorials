// function
function add(n1: number, n2: number) {
  // return type is number.
  return n1 + n2;
}
console.log(add(1, 3));

// explicitly defining the return type in function
function sub(n1: number, n2: number): number {
  return n1 + n1;
}
console.log(sub(2, 3));

// void type(not in js, only in ts)
function printResult(num: number): void {
  console.log(num);
}
printResult(7);

// function type
let combineValue: (a: number, b: number) => number; //here it takes two number type arg. and return number type
combineValue = add;
// combineValue = 5 => show error
// combineValue = printResult => show error

console.log(combineValue(1, 3));

function addAndHandle(n1: number, n2: number, cb: (um: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(12, 15, (result) => {
  console.log(result);
});
