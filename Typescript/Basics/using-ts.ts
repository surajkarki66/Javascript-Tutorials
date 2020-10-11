const button = document.getElementById("btn");
const input1 = document.getElementById("num1")! as HTMLInputElement; // the exclamation mark tells that it never yield null.
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});
