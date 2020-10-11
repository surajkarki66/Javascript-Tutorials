const getFruit = require("./async-await");

const badSmoothie = async () => {
  try {
    const a = getFruit("pineapple");
    const b = getFruit("strawberry");
    const smoothie = await Promise.all([a, b]);

    //throw 'broken!'
    return smoothie;
  } catch (err) {
    // console.log(err);
    // return `😬 We are going to be fine...`
    throw `💩 It's broken!`;
  }
};
badSmoothie()
  .then((v) => console.log(v))
  .catch((e) => console.log(e));

console.log("Synchronous code !");
