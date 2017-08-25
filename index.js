var recipes = {
  eggs : "3",
  flour : "3 cups"
};

function updateObjectWithKeyAndValue (recipes, ingredient, amount) {
  recipes[ ingredient ] = amount

  return recipes
}

function updateObjectWithKeyAndValue (recipes, ingredient, amount) {
  return Object.assign({}, recipes, {[ingredient]:amount})
}

function destructivelyUpdateObjectWithKeyAndValue (recipes, ingredient, amount) {
  recipes[ingredient] = amount

  return recipes
}

function deleteFromObjectByKey (recipes, amount) {}