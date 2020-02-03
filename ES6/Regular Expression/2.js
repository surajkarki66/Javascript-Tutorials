// Data class

data = new Date();
console.log(data);

function getData(string) {
    let [_, month, day, year] =  /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
            return new Date(year,month-1,day);
}

console.log(getData("1-2-1998"));

// Word and string boundaries

console.log(/cat/.test("concatenate"));
console.log(/\dcat\d/.test("concatenate"));


// Choice patterns

let vehicle =  /\b\d+ (car|bike|aeroplane)s?\b/;
console.log(vehicle.test("12 bikes and 5 cars"));

// The replace method

console.log("mama".replace("m","a"));

console.log("Borobudur".replace(/[ou]/,"a"));
console.log("Borobudur".replace(/[ou]/g,"a"));

