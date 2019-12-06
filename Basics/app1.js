var name = "Suraj Karki";
console.log(name);





var clas = "Bachelor";
var a = 5;

console.log(a === clas);
console.log(typeof(a));

//var a = 10, b = 5;
//alert(a*b);

// Function

function oddEven(num) {
    if(num%2 == 0)
    {
        console.log("Even=",num);
        return true;
    }
    else
    {
        console.log("Odd=",num);
        return false;
        
    }
    
}

a = oddEven(5);


// Objects

let car = {name:"Lambhorgini",model:123,color:"red",price:1200000};

console.log(car);
console.log(car.color);
console.log(car["name"]);


// Events
/*

onchange	An HTML element has been changed
onclick	The user clicks an HTML element
onmouseover	The user moves the mouse over an HTML element
onmouseout	The user moves the mouse away from an HTML element
onkeydown	The user pushes a keyboard key
onload


*/


let prop = "Hello World";
var len = prop.length;  
//alert(len);

// Finding a string

var str = " Hello  its me, I was wondering.";
console.log(str.indexOf("its"));        

// Searching

var lastname = "Karki is very brave boy";
console.log(lastname.search("its"));


// Number methods

var y = 10;
y.toString();
console.log(typeof(y));
console.log(y.toExponential());
console.log(y.toPrecision(2));
// Array Elements can be object
var bike = ["Duccati","Pulsar","FZ"];

var person = {firstname:"suraj",lastname:"Karki",age:20};
bike[0] = person.firstname;
console.log(bike[0]);
bike[2] = person.age;
console.log(bike[2]);

// Looping the array
/*
for(var i = 1;i<3;i++)
{
    console.log(bike[i]);
}
*/

// Adding elements in array

bike.push("Hero");
console.log(bike);


// Array Iteration

var num = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

num.forEach(function (day,index) {
    console.log(`${index+1}) Today is ${day}`);
    
})

// It creates new array using existing array
var num1 = [1,3,5,7];
var num2 = num1.map(function (value) {
    console.log(value*2);
    if (value%2 == 0)
    {
        console.log(value);
    }
    else
    {
        console.log("Fuck You!");
    }
    
})


// Filter

var test = [2,4,9,16];

var rest = test.filter(function (value,index,array) {
    if(value > 12)
    {
        console.log(value);
    }

})


// Scope - inside function declared variable is in local scope
//         Outside function declared variable is in global scope

// let 

{
    var a = 5;
}

console.log(a);

{
    let b = 4;
}
//console.log(b); // it is not accessed outside the bracket

let c = 3; // global
{
    let c = 5;
}
console.log(c);


// const -> JavaScript const variables must be assigned a value when they are declared:

//const pi;
//pi = 333; // wrong


const PI = 3.1415;
console.log(PI);

// we can change the value of  const object;

const obj = {
    name: 'object',
    roll: 12
}

obj.name = "Yeah";

// We can change the const arrays;


// Arrow Function  -> Arrow functions allow us to write shorter function syntax:

// without arrow
hello = function() {
    return "Hello";
    
}


// with arrow

hello = () => {
    return "Hello World";
}

console.log(hello())
