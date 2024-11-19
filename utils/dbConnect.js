import mongoose from "mongoose";

let isDbConnected = false;

export async function connecDb() {
  if (isDbConnected) {
    console.log("Database already connected");
    return;
  } else {
    try {
      await mongoose.connect(process.env.MONGO_URI, { dbName: "startups" });
      isDbConnected = true;
      console.log("Database connected successfully");
    } catch (error) {
      console.log("Database connection failed");
    }
  }
}
