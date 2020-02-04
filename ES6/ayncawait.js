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


const posts = [
    { title: 'First Post', body: 'This is my first post'},
    { title: 'Second Post', body: 'This is my second post'}
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += post.title;
        })
        console.log(output);
    }, 1000);
}

function createPost(post) {
    setTimeout(() => {
        posts.push(post);
    }, 1000);
}

async function init() {
    await createPost({title: 'Hello', body: 'Im good'});

    getPosts();
    
}


