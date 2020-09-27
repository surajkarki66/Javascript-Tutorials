// Generators
// When you call it generates new value
// It also gives iterators
// On fly calculation-> use when required
// the * after function keyword indicates, it is a generator function.

function* numbersGen() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}

function* oddGen() {
  let i = 0;
  while (true) {
    if (i % 2 !== 0) {
      yield i;
      i++;
    }
    i++;
  }
}

const gen = numbersGen();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

const odd = oddGen();
console.log(odd.next());
console.log(odd.next());
console.log(odd.next());
console.log(odd.next());
console.log(odd.next());
