// compiling in watch mode
// only good for compilation of one ts file
// $ tsc app.ts -w
// To solve it:(The whole project is managed by typescript.)
// $ tsc --init
// To compile multiple files
// $ tsc => compile all typescript files
// $ tsc -w => compile all typescript files in watchmode


console.log("This");
function sub(n1: number, n2: number) {
	return n1 - n2
}

let subtractor : (n1: number, n2: number) => number;
subtractor = sub;

console.log(subtractor(2, 3));
