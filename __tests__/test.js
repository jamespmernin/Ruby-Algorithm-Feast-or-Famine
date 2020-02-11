let algos = require("../feast.js");
//FEAST OR FAMINE
//array takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//there is a space in each string
//if the first and last letter of the animal match the first and last letter of the food, return true, otherwise return false

// ("great blue heron", "garlic naan") return => 'gn'
test("check if first and last letters of sting match", () => {
  expect(algos.feast("great blue heron", "garlic naan")).toBe('gn')
  expect(algos.feast("great blue hero", "garlic naan")).toBe('on')

});

  