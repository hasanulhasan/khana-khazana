'use server'

import { createUser, findUserInfo } from "@/app/db/queries";
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

export {registerUser, getLoginInfo}