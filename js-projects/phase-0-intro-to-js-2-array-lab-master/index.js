// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
let destructivelyAppendCat = (name) => {
  cats.push(name);
};
let destructivelyPrependCat = (name) => {
  cats.unshift(name);
};
let destructivelyRemoveLastCat = (name) => {
  cats.pop(name);
};
let destructivelyRemoveFirstCat = (name) => {
  cats.shift(name);
};
let appendCat = (name) => {
  let newArray = [...cats];
  newArray.push(name);
  return newArray;
};
let prependCat = (name) => {
  let newCats = [...cats];
  newCats.unshift(name);
  return newCats;
};
let removeLastCat = () => {
  let newCats = [...cats];
  newCats.pop();
  return newCats;
};
let removeFirstCat = () => {
  let newCats = [...cats];
  newCats.shift();
  return newCats;
};
