// unknown type
let userInput: unknown;
let userName: string;

userInput = 6;
userInput = "Hello";

if (typeof userInput === "string") {
  userName = userName;
}

console.log(userInput);

function generateError(message: string, code: number): never {
  // this function never returns anything
  throw { message: message, code: code };
}

generateError("An error occured.", 500);
