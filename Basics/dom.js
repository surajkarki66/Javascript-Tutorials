// DOM -> Document Object Model

// Get elements by id
var x = document.getElementById("test");

console.log(x);

x.innerHTML = "I am A developer"; // Add a new text in that class

// Get element by tagname

var y = document.getElementsByTagName("p");
console.log(y);

// Get elements by class name

var z = document.getElementsByClassName("hello");
console.log(z);

// It gives lists of nodes
var m = document.querySelectorAll("a.hello");
console.log(m);

var arr = document.getElementsByTagName("p");

for(var i = 0; i< arr.length;i++)
{
    arr[i].innerHTML = "By World";
}

// Child Nodes

var node = arr.childNodes;


/*
// Changing the attributes
var att = document.getElementById("image");
att.src = "orange.png";

*/

//Changing the HTML output strings

// DOM css
    