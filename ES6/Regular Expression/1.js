// Regular expression are a way to describe patterns in string..
// In js regular expression is object

// Creating regular expression(here / is the starting point and ending point)
let re1 = /abc/;
let re2 = RegExp("abc");

let eighteenPlus = /eighteen\+/;

// Testing for matches

console.log(re1.test("abc"));
console.log(eighteenPlus.test("eighteen+"));

// Sets of characters

let num = /[0-9]/;  // - is used to indicate range
console.log(num.test("in 2019"));

let dateTime = /\d\d-\d\d-\d\d\d\d\ \d\d:\d\d/;
console.log(dateTime.test("01-02-1998 12:20 is my birthday."));

// specific set of character

let notBinary = /[^01]/;     // except 01
let notab = /[^ab]/;
console.log(notBinary.test("0111010101010"));
console.log(notab.test("ab"));

// Repeating parts of a pattern
console.log(/\d+/.test("'121',' '"));
console.log(/sur?aj/.test("suraj")); // r  one time
console.log(/sur?aj/.test("suaj")); // r zero time

// How many time it occurs

let datetime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{1,2}/;
console.log(datetime.test("1-02-1912 1:20"));

// Grouping sub expressions
let crying = /boo+(boo+)+/;
console.log(crying.test("Boohoooohoooo"));

// Matches and groups
let Re = /\d{10}/.exec("Hello this is my number 9807111049");
console.log(Re);  //gives required exp.
console.log(Re.index); // Where in the text match begins

let Re2 = /\d{1,2}-\d{1,2}-\d{4}/.exec("My birth date is 04-07-1998");
console.log(Re2);

let quotedText = /'([^']*)'/.exec("she said 'Hello'");
console.log(quotedText);

console.log(/bad(ly)?/.exec("badly"));
