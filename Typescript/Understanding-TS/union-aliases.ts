// Union Type
function combine(
  n1: number | string,
  n2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  // accepting both number and string
  let result: string | number;
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

console.log(combine(1, 3, "as-number"));
console.log(combine("Suraj", "66", "as-text"));

// Type Aliases
type Combinable = number | string;
// function combine(n1: Combinable, n2: Combinable){}
