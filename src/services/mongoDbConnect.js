import mongoose from "mongoose";

export const mongoConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB);
  } catch (err) {
    console.log(err);
  }
};
