// let keyword only accessible inside the block in which it defined
// var keyword ->function

function sayHello()
{
    for(let i=0;i<5;i++)
    {
        console.log(i);
    }
    // console.log(i)  not accessible
}

//const -> const variable are read only variable

const j = 5;
//j = 3  illegal





// Objects -> collection of key-value pair

const person = {
    name: 'Suraj',
    talk() {},
    speak() {
        console.log(this)
    }   // method
};

console.log(person['name'])
console.log(person["speak"])


// this keyword -> return the reference of the current object

const prolang = {
    name: 'Python',
    info()
    {
        console.log(this);
    }
};

prolang.info(); // return reference of the object

const info = prolang.info;
info();  // return global object







// Binding this -> set the value of this permanently
// in js every function is object

const run = person.speak.bind(person);
run();



// Arrow function
//for single line

const square = (number) => number * number;

console.log(square(5));

// for multiline

const cube = (num) => {
    console.log("Hello");
    return num * num * num;
}

cube(3);

const jobs = [
    {id:1, isActive:true},
    {id:2, isActive:false},
    {id:3, isActive:true},
];

const activeJobs = jobs.filter(job => job.isActive);
console.log(activeJobs);



const language = [
    {id:1,name:"Python",position:"first",isActive:true},
    {id:2,name:"Javascript",position:"second",isActive:true},
    {id:1,name:"Java",position:"third",isActive:false},
    

];

const first = language.filter(position => {return position.position});
console.log(first);

const active = language.filter(active => { return active.isActive});
console.log(active);

const nums = [1,2,3,4,5,6,7,8,9];

const odd = nums.filter(num => {return (num % 2 == 0)});
console.log(odd);


// arrow function with this
// arrow function dont rebind the this keyword

const arrow = {
    talk() {
        setTimeout(() => {
            console.log("this",this);
        },1000);
    
    }
};

arrow.talk();



// array.map()

const colors = ['red','black','green']

const iterator = colors.map(function(item) { return item});
console.log(iterator);

const items = colors.map((color) => { return `${color}`});
console.log(items);




// object destructuring

const address = {
    street: '',
    city: '',
    country:''
};


const street = address.street;
const city = address.city;
const country = address.country;

// Another way

// const {street, city, country} = address;


const intro = {
    username: "surajkarki66",
    password: "Suraj",
    email: "suraj@gmail.com"
    
}

const username = intro.username;
const password = intro.password;
const email = intro.email;
console.log(username);
console.log(password);
console.log(email);

//another way

//const {username,password,email} =  intro;
// const{username:user}


// Spread Operator

const first_array = [1,2,3];
const second_array = [4,5,6];

const cobined = first_array.concat(second_array);

console.log(cobined);

// Another way

const comb = [...first_array,...second_array];
console.log(comb);

// We can also add an elements between them
const comb1 = [...first_array, 'hello', ...second_array, 'I am Suraj']
console.log(comb1);

const clone = [...first_array];

// for object(to combined the object)

const obj1 = {name: "Suraj"};
const obj2 = {occupation:"Developer"};

const obj = {...obj1,...obj2, location:"Kathmandu"};
console.log(obj);


//Example

const object1 = {
    name: "Suraj",
    job: "Python Developer",
    isActive:true,
    isSenior:true
}

const object2 = {
    name: "Saman",
    job:"Python Developer",
    isActive:true,
    isSenior:true
}

const combinedobj = {...object1,...object2,}
console.log(combinedobj);