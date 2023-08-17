import mongoose from "mongoose";

export async function InitDB(uri) {
  try {
    const url = uri; 
    await mongoose.connect(url);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
}
