import { Person } from './person.js';  // ./ for current folder
 
export const func = () => {
    
}


export class Teacher extends Person {     //to make object public
    constructor(name,degree) {
        super(name);
        this.degree = degree;

    }
    teach() {
        console.log("Teach");

    }
}


// if 

/*

export default class Teacher extends Person {     //to make object public
    constructor(name,degree) {
        super(name);
        this.degree = degree;

    }
    teach() {
        console.log("Teach");

    }
}
*/