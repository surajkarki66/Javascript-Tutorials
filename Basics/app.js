/*

let num = 9;
let string = "suraj";
let bool = true;
let firstName = undefined;
let colot = null;


( Better Practice )

let name = "Suraj";
let age = 12;
document.write(name, "is ",age,"years old.");


(Not better)
var foodcost = 344.5;
var no = prompt("Enter number of people:");

( If you didnt want to reassign the variable )
const age = 13;

document.write("The total cost of food was ",foodcost,"<br>");
document.write("Each one of you have to pay ",(foodcost/no).toFixed(2));

*/


//document.write("2 raise to the power 4", Math.pow(2,4));




// String Function

/*var str1 = "Suraj Karki";
document.write(str1.length,"<br>")
document.write(str1.indexOf("Karki"),"<br>")
*/



//Even odd


/*
var num = prompt("Enter a number:");
if (num%2==0) {
	document.write(num," is a even number.");

}

else{
	document.write(num," is a odd number.");
}

*/

/*

alert("Press add For Addition.<br>");
alert("Press sub For Subtraction.<br>");

var choice = prompt("Enter your choice.<br>");

if (choice == "add")
{
	var a1 = prompt("Enter the first number.<br>");
	var a2 = prompt("Enter the second number.<br>");
	var add = a1 + a2;
	alert("The result is");
	document.write("Addition=",add);

}

else if (choice == "sub") {
	var a1 = prompt("Enter the first number.<br>");
	var a2 = prompt("Enter the second number.<br>");
	var sub = a1 - a2;
	alert("The result is ");
	document.write("Subtraction = ",sub);	
}

else{
	alert("Invalid Choice.");
}
*/



// Relational Operators : ==, !=, <,>
// Logical Operators : &&, ||

// Switch Case

/*
var age = prompt("Enter your age:<br>");
switch(age)
{

	case "18":
		document.write("Your age is 18");
		break;

	case "22":
		document.write("Your age is 22");
		break;

	case "50":
		document.write("Your are so old 50");
		break;

	default:
		document.write("Invalid Choice");
}

*/


// Loops


/*
var i =1;

while(i<=100)
{
	document.write(i,"<br>");
	i ++;
}


var j = 1;
do
{
	document.write(j,"<br>");
	j++ ;
} while(j<=10)


for(var k = 1; k < 100; k++)
{
	document.write("Hello World <br>");
}

*/


// arrays  

/*
var books = ['Harry Potter','Ron Wisely','Hermoine Granger',1,2,3];
document.write(books[0]);
*/



// Functions

function suraj()
{
	document.write("I am a developer.<br>");
	console.log("I am expert");
}


suraj();

function add(n1,n2)
{
	let sum = n1 + n2;
	document.write(sum);
}

add(1,2);

function greet(firsname,lastname)
{
	console.log(firsname,lastname);
}

greet("suraj","karki");
greet("Michael");


// Objects -> it stores multiple values



let person = {
	name: 'Suraj',
	age: 30
}


// Dot notation

person.name = "Michael";
person.age = 12

// Bracket notation
let selection = 'name';
person[selection] = 'Suraj';	
person['age'] = 20;

console.log(person)

