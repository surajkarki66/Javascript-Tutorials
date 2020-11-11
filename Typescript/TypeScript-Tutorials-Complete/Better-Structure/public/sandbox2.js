import Invoice from "./classes/Invoice.js";
import Payment from "./classes/Payment.js";
// INTERFACES
let docOne;
let docTwo;
let docs = [];
docOne = new Invoice("SurajKarki", "Work on Glasir", 300);
docTwo = new Payment("Binish", "Software work", 300);
docs.push(docOne);
docs.push(docTwo);
const me = {
    name: "Suraj",
    age: 20,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent", amount);
        return amount;
    },
};
// console.log(me);
const greetPerson = (person) => {
    console.log(`hello ${person.name}`);
};
greetPerson(me);
// GENERICS => Allows to create reusable blocks of code can be used with different types.
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let firstDoc = addUID({ name: "Suraj", age: 40 });
let secondDoc = addUID({ title: "Hello World.", subject: "Nothing" });
console.log(firstDoc);
console.log(firstDoc.uid);
console.log(secondDoc);
console.log(secondDoc.title);
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docThree = {
    uid: 1,
    resourceName: "book",
    resourceType: ResourceType.BOOK,
    data: { title: "name of the wind" },
};
const docFour = {
    uid: 2,
    resourceName: "person",
    resourceType: ResourceType.PERSON,
    data: ["Suraj", "Karki"],
};
