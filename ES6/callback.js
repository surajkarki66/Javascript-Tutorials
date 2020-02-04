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

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({title: 'Third Post', body: 'No'}, getPosts);