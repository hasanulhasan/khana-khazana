import { User } from "../models/usersModel";

const { Recipe } = require("../models/recipeModel");

const getAllRecipes = async () => {
  const allRecipes = await Recipe.find().lean();
  return allRecipes;
};

const getSingleRecipe = async (id) => {
  const recipe = await Recipe.findById(id).lean();
  return recipe;
};

const getAllCategory = async () => {
  const category = await Recipe.distinct("category")
  return category;
}

const getRecipeByCategory = async (categoryName) => {
  const categories = await Recipe.find({category: categoryName})
  return categories;
}

const createUser = async (user) => {
  return await User.create(user)
}

const findUserInfo = async (userInfo) => {
  const user = await User.findOne(userInfo).lean();
  if(user){
    return user
  }else{
    return null
  }
}



export { getAllRecipes, getSingleRecipe, getAllCategory, getRecipeByCategory, createUser, findUserInfo};
