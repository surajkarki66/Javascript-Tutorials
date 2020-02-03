// async return a promise

async function apiFetch() {
    const response = await fetch('https://api.github.com/users');   //one promise-> wait for response to be fetched do other work outside function.
    console.log("Before response"); 
    const users = await response.json();                        // another promise -> wait for to finished json
    console.log('users resolved')  

    return users;

}

console.log('Before function calling');
let user  = apiFetch();
console.log('After function calling');
console.log(user);

user.then(data => console.log(data));
console.log("Finished");


