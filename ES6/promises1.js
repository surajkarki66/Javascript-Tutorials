const posts = [
    { title: 'First Post', body: 'This is my first post'},
    { title: 'Second Post', body: 'This is my second post'}
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            console.log(post.title);
        })
        console.log(output);
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            console.log('Pushed');
            const error = false;
            if (!error) {
                resolve();
            }

            else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}
/*
createPost({title: 'Hello', body: 'Im fine'}).then(getPosts).catch((error)=> {console.log(error)});
*/


