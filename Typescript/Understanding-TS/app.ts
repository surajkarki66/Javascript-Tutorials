// Core data types
// number, string, boolean, object, array, tuple(fic length array), enum

// The key difference is javascript uses "dynamic types"(resolved at runtime), Typescript uses "static types"(set during dev)
// Typescript has a built in functionality type inference

// number, string , boolean type
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}

const number1 = 5; // This is not good practice => const number1: number = 5;
const number2 = 2.3; // This is good practive => const number2: number;
const printResult = true;
const resultPhrase = "Result is ";

add(number1, number2, printResult, resultPhrase);

// object type

// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: "Dev Ed",
  age: 40,
};

console.log(person);

// array
const student = {
  name: "Binish",
  age: 20,
  hobbies: ["Sports", "Coding"],
};

let favoriteActivities: string[];

favoriteActivities = ["Music", "Coding"];

for (const hobby of student.hobbies) {
  console.log(hobby);
  console.log(hobby.toUpperCase());
}

// tuple
const user: {
  name: string;
  role: [number, string];
} = {
  name: "binod",
  role: [2, "author"],
};

user.role.push("admin");
//user.role[1] = 10;

console.log(user);

// enum => assigns labels to the number.
enum Role {
  ADMIN, // also ADMIN = 10
  READ_ONLY, // READ_ONLY = 0
  AUTHOR,
}
const user2 = {
  name: "Kiran",
  role: Role.READ_ONLY,
};

console.log(user2);
