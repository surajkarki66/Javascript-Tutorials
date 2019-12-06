let day = {
    suraj: true,
    events: ["coding","youtube","playing"]
}

console.log(day);
console.log(day.suraj);
console.log(day.events[0]);

// Mutability

let obj1 = {value:5};
let obj2 = obj1;
let obj3 = {value:5};

console.log(obj2 == obj3);