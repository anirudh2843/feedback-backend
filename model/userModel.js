import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    textArea: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("feedBack", userSchema);
