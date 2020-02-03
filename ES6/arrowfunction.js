// Arrow function

const Sum = (num) => {
    var sum = 0;
    var i = 0;
    while(i<num)
    {
        sum += 1;
        i++;


    }
        
    
    console.log(sum);
}

Sum(3);


const Square = (number) => {
    return (number*number);
}

console.log(Square(10));


let Greet = (who) =>
{
    console.log("Welcome ",who);
}

Greet("Michael");




const compelex = (rp,ip) =>{

    console.log(rp+ip);
}

compelex(1,2);

