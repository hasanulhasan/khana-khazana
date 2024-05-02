const { Recipe } = require("../models/recipeModel")


const getAllRecipes = async ()=> {
  const allRecipes = await Recipe.find().lean();
  // console.log(allRecipes)
  return allRecipes;
}

export {
  getAllRecipes
} 