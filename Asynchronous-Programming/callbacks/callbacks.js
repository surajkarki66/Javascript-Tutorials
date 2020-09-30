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
  console.log("Getting post.");
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
  console.log("Hold 1 second");
}

function createPost(post, callback) {
  console.log("Creating Post");
  setTimeout(() => {
    posts.push(post);
    console.log("Callback function called");
    callback();
  }, 2000);
  console.log("Hold 2 seconds.");
}

//getPosts();

createPost(
  {
    title: "Third Post",
    body: "Third post",
  },
  getPosts
);
