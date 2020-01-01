//It can be useful for a function to accept any number of arguments

function max(...numbers)
{
    let result = -Infinity;
    for (let num of numbers)
    {
        if(num>result)
        {
            result = num;
        }
    }
    return result;
}

console.log(max(4, 1, 9, -2));


numbers = [1,2,3,4,"Suraj"];

for (let number of numbers  )
{
    console.log(number);
}