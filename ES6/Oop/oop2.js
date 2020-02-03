// Map
/*A map (noun) is a data structure that associates values (the keys) with other
values. For example, you might want to map names to ages. It is possible to
use objects for this.
*/

let ages = {
  Suraj: 20,
  Rojan:18,
  Saman:19,
  Binish:19
}

console.log(`Suraj is ${ages["Suraj"]}`);
console.log(`Rojan is ${ages["Rojan"]}`);

// Here objects property name is not string but most be string
// So above concept is not good concept

let age = new Map();
age.set("Suraj",20);
age.set("Binish",19);

console.log(`Binish is ${age.get("Binish")}`);

//symbol

let sym = Symbol("name");

ages.Suraj[sym] = 30;

console.log(ages["Suraj"]);
