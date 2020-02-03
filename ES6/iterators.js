
function moviesIterator(values) {
    let nextIndex = 0;
    // it will return an object
    return {
        next: function () {
            if (nextIndex < values.length) {
                // it will return below object
                return {
                    value: values[nextIndex++],
                    done: false
                }
            }
            else {
                // it will return below object with only done
                return {
                    done: true
                }
            }
        }
    }
}

const movies = ['The Avengers', 'The Hulk', 'Thor'];
const movie = moviesIterator(movies);

console.log(movie.next());
console.log(movie.next());
console.log(movie.next());
console.log(movie.next());
console.log(movie.next().done);
console.log(movie.next().value);