const { Recipe } = require("../models/recipeModel");

const getAllRecipes = async () => {
  const allRecipes = await Recipe.find().lean();
  return allRecipes;
};

const getSingleRecipe = async (id) => {
  const recipe = await Recipe.findById(id).lean();
  return recipe;
};

export { getAllRecipes, getSingleRecipe };
