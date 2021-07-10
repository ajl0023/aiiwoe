const affogato = require("./affogato.png");
console.log(affogato);
const black = require("./black.png");
const cafe = require("./cafe.png");
const cap = require("./cap.png");
const decaf = require("./decaf.png");
const espresso = require("./espresso.png");
const latte = require("./latte.png");
const mocha = require("./mocha.png");
const rist = require("./rist.png");
export const cups = [
  affogato,
  black,
  cafe,
  cap,
  decaf,
  espresso,
  latte,
  mocha,
  rist,
].map((cup) => {
  const regex = /\/(\w+)\./;

  cup["name"] = cup.default.match(regex)[1];
  return cup;
});
