// Generators
// When you call it generates new value
// It also gives iterators
// On fly calculation-> use when required

function* numbersGen() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }

}

const gen = numbersGen();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());    