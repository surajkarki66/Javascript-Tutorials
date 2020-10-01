const getFruit = require("./async-await");

const makeSmoothieFaster = async () => {
  // In this way we can get pineapple and strawberry at same time.
  const a = getFruit("pineapple");
  const b = getFruit("strawberry");

  const smoothie = await Promise.all([a, b]);

  return smoothie;
};

const fruitRace = async () => {
  const a = getFruit("pineapple");
  const b = getFruit("strawberry");

  const winner = await Promise.race([a, b]);

  return winner;
};

fruitRace().then((v) => console.log(v));
makeSmoothieFaster().then((v) => console.log(v));

console.log("race Finished");
