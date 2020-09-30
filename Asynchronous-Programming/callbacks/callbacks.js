const posts = [
  {
    title: "First Post",
    body: "First post",
  },
  {
    title: "Second Post",
    body: "Second post",
  },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

//getPosts();

createPost(
  {
    title: "Third Post",
    body: "Third post",
  },
  getPosts
);
