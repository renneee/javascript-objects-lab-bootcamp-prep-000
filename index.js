var recipes = {
  eggs : "3",
  flour : "3 cups"
};

function updateObjectWithKeyAndValue (recipes, ingredient, amount) {
  recipes[ ingredient ] = amount

  return recipes
}
