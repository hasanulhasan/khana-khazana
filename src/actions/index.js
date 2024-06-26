'use server'

import { createUser, findUserInfo, updateFavorite } from "@/app/db/queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function registerUser(formData) {
  const user = Object.fromEntries(formData);
  const created = await createUser(user);
  redirect("/login");
}

const getLoginInfo = async (formData) => {
  try {
    const userInfo = {};
    userInfo.email = formData.get("email");
    userInfo.password = formData.get("password")
    const user = await findUserInfo(userInfo);
    return user
    
  } catch (error) {
    throw error
  }
}

const addFavorite = async (recipeId, userId) => {
  try {
    await updateFavorite(recipeId, userId)
  } catch (error) {
    throw error
  }
  revalidatePath('/details/[recipeId]', 'page');
}

export {registerUser, getLoginInfo, addFavorite}