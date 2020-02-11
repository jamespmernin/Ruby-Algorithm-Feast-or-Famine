//FEAST OR FAMINE
//array takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//there is a space in each string
//if the first and last letter of the animal match the first and last letter of the food, return the first and last letters

//("great blue heron", "garlic naan") return => "gn"


const feast = (beast, dish) => {
  let beastArr = beast.split("")
  let dishArr = dish.split("")
  if (beastArr[0] === dishArr[0] && beastArr[beastArr.length-1] === dishArr[dishArr.length-1]) {
    return beastArr[0] + dishArr[dishArr.length-1]
  }
  return false
 
}
console.log(feast("great blue heron", "garlic naan"))


module.exports = {
  feast
};
