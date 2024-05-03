import mongoose from "mongoose";
import { User } from "../models/usersModel";

const { Recipe } = require("../models/recipeModel");

const getAllRecipes = async () => {
  const allRecipes = await Recipe.find().lean();
  return allRecipes;
};

const getSingleRecipe = async (id) => {
  try {
    const recipe = await Recipe.findById(id).lean();
    return recipe;
  } catch (error) {
    throw error;
  }
};

const getAllCategory = async () => {
  const category = await Recipe.distinct("category");
  return category;
};

const getRecipeByCategory = async (categoryName) => {
  const categories = await Recipe.find({ category: categoryName });
  return categories;
};

const createUser = async (user) => {
  return await User.create(user);
};

const findUserInfo = async (userInfo) => {
  const user = await User.findOne(userInfo).lean();
  if (user) {
    return user;
  } else {
    return null;
  }
};

const updateFavorite = async (recipeId, userId) => {
  const user = await User.findById(userId);

  if (user) {
    const foundRecipe = user?.favourites?.find(
      (id) => id.toString() === recipeId
    );

    if (foundRecipe) {
      user.favourites.pull(new mongoose.Types.ObjectId(recipeId));
    } else {
      user.favourites.push(new mongoose.Types.ObjectId(recipeId));
    }
    user.save();
  }
};

export {
  getAllRecipes,
  getSingleRecipe,
  getAllCategory,
  getRecipeByCategory,
  createUser,
  findUserInfo,
  updateFavorite,
};
