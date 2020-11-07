console.log("This is testing");
console.log("This is in watch mode.");

function add(n1: number, n2: number) {
	return n1 + n2
}

let adder: (n1:number, n2:number) => number;
adder = add;
console.log(adder);
