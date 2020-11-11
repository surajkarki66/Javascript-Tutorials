import Invoice from "./classes/Invoice.js";
import Payment from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// INTERFACES

let docOne: HasFormatter;
let docTwo: HasFormatter;
let docs: HasFormatter[] = [];

docOne = new Invoice("SurajKarki", "Work on Glasir", 300);
docTwo = new Payment("Binish", "Software work", 300);

docs.push(docOne);
docs.push(docTwo);

interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "Suraj",
  age: 20,
  speak(text: string) {
    console.log(text);
  },
  spend(amount: number) {
    console.log("I spent", amount);
    return amount;
  },
};

// console.log(me);

const greetPerson = (person: IsPerson) => {
  console.log(`hello ${person.name}`);
};

greetPerson(me);

// GENERICS => Allows to create reusable blocks of code can be used with different types.

const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let firstDoc = addUID({ name: "Suraj", age: 40 });
let secondDoc = addUID({ title: "Hello World.", subject: "Nothing" });

console.log(firstDoc);
console.log(firstDoc.uid);

console.log(secondDoc);
console.log(secondDoc.title);

// ENUMS

enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

// with interface
interface Resource<T> {
  uid: number;
  resourceName: string;
  resourceType: ResourceType;
  data: T;
}

const docThree: Resource<object> = {
  uid: 1,
  resourceName: "book",
  resourceType: ResourceType.BOOK,
  data: { title: "name of the wind" },
};

const docFour: Resource<string[]> = {
  uid: 2,
  resourceName: "person",
  resourceType: ResourceType.PERSON,
  data: ["Suraj", "Karki"],
};
