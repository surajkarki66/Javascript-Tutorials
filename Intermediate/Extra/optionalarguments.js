// if extra arguments is given in function call then js ignore the extra arg
// if there is too few arguments then the missing argument is assigned to undefine

let Test = (name,num) =>{
    console.log("Hello ",name);
    console.log("Your phone number is ", num);
}

Test("Suraj",9807111049,"exrea",23);


let Sample = (a,b) =>{
    if (a==undefined)
    {
        console.log("The value of a is empty so a is undefined");
    }
    else if (b==undefined)
    {
        console.log("b is undefined");

    }

    else if(a == undefined && b == undefined)
    {
        console.log("Both are undefined");
    }

    else
    {
        console.log(a,b);
    }
}

Sample(1,2);
Sample(1);
Sample();