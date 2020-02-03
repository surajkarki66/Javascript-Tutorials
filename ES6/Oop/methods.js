let person = {} // Blank Object

person.name = "Suraj";
person.age = 20;
person.isCoder = true;
person.work = function work() {
    console.log("Work hard");
}

person.speak = speak = (line) => {
    return line;
}

console.log(person);
console.log(person.speak("Hello its suraj"));