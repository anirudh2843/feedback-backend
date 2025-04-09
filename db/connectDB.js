import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("DB connection successfull");
  } catch (err) {
    console.log("db connection failed ", err);
  }
};
