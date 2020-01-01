// Improvised modules

const weekDay = function() {
    const names = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday","Saturday"];

    return {
        name(number) { return names[number];},
        number(name) { return names.indexOf(name);}
    };
}();

console.log(weekDay.name(2));
console.log(weekDay.number("Sunday"));

// Evaluating data as code 

const x =1;
function evalAndReturnX(code) {
    eval(code);
    return x;

}
console.log(evalAndReturnX('var x=3'));
console.log(x);
// This is precisely what we need for module system.
// We can wrap modules code in a function use that function scope as module scope


// ECMASCRIPT  Modules

import ordinal from "ordinal";
import {days as dayName, months} from "date-names";

export function formatDate(date, format) {/*....*/};

console.log(dayName.length);



