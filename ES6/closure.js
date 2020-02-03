function multiply(factor)
{
    return number => number * factor;
}

let twice = multiply(2);
console.log(twice(3));