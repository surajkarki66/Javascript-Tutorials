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

async function init() {
  console.log("Starting init function !");
  try {
    console.log("Awaiting start !");
    const posts = await createPost({
      title: "Third Post",
      body: "Third post",
    });
    // waiting to complete the above  function execution.
    console.log("awaiting finished !");
    if (posts) {
      console.log(posts);
      console.log("posts fetched !");
    }
    console.log("Showing post in dom");
    getPosts();
  } catch (e) {
    console.log(e);
  }
}

init();
console.log("Finished !");
