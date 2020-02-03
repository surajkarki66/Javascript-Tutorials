export default class User {
    constructor(name, age, prolang) {
        this.name = name;
        this.age = age;
        this.prolang = prolang;
    }
    jsHeaven() {
        return true;
    }
}

export function info(user) {
    console.log(`Hello!, My name is ${user.name}
                and i am ${user.age}`);
}

export function proLang(user) {
    return user.proLang;
}
