// Higher Order function =>  A Higher-Order function is a function that receives a function as an argument
// otherwise returns function as output.
// Higher-Order Arrow function implies using arrow functions (in ES6)
//  along with Higher-Order functions.

/* 
Why to avoid forEach() ?
The forEach() function does not return any value so results need to be pushed in a predefined array
whereas this is not the case in map() function.
*/

// Data set of students
const Students = [
  { rollNo: 21, name: "Alpha" },
  { rollNo: 22, name: "Beta" },
  { rollNo: 23, name: "Gamma" },
  { rollNo: 24, name: "Delta" },
  { rollNo: 25, name: "Omega" },
];

// Use forEach() function
let StudentRollNo = [];
let StudentName = [];

Students.forEach(function (Student) {
  StudentRollNo.push(Student.rollNo);
  StudentName.push(Student.name);
});

// Display rollNo data
console.log(StudentRollNo);
console.log(StudentName);

// 1. map()

// Use map() function
const studentRollNo = Students.map(function (Student) {
  return Student.rollNo;
});

const studentName = Students.map((Student) => {
  return Student.name;
});
// Display rollNo data
console.log(StudentRollNo);
console.log(studentName);

// 2. reduce() function
// Data set of students
const students = [
  { rollNo: 21, name: "Alpha", prizesWon: 4 },
  { rollNo: 22, name: "Beta", prizesWon: 3 },
  { rollNo: 23, name: "Gamma", prizesWon: 0 },
  { rollNo: 24, name: "Delta", prizesWon: 4 },
  { rollNo: 25, name: "Omega", prizesWon: 1 },
];

// Using reduce() function
const totalPrizes = students.reduce(function (accumulator, Student) {
  // accumulator is just like index
  return accumulator + Student.prizesWon;
}, 0);

// Display total number of prizes won by all
console.log(totalPrizes);

// 3. find() function
// It also works on an array and returns the first array element which satisfies the condition given in the function. It is similar to map() function. Its performance is not much efficient in case of large data sets although it works fine with small data sets.
// Using find() function
const achievers = students.find(function (Student) {
  return Student.prizesWon == 4;
});

const nameFilter = students.find((student) => {
  return student.name === "Gamma"; // it only returns either true or false
});

// Display only first Student who won four prizes
console.log(achievers);
console.log(nameFilter);

// 4. filter() function.
const nameFilters = students.filter((student) => {
  return student.prizesWon === 4; // it either returns true or false
});

console.log(nameFilters);
