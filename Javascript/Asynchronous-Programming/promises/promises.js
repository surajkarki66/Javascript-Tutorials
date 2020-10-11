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

function createPost(post) {
  return new Promise((resolve, reject) => {
    console.log("Creating post");
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve(posts);
      } else {
        reject("Error occured");
      }
    }, 2000);
    console.log("Waiting for 2 seconds");
  });
}

createPost({
  title: "Third Post",
  body: "Third post",
})
  .then((getPosts) => {
    console.log(getPosts);
    console.log("Post fetched !");
  })
  .catch((err) => console.log(err));

console.log("Finished !");
