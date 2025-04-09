import feedBack from "../model/userModel.js";
import validator from "validator";

const handleFeedback = async (req, res) => {
  const { name, email, textArea } = req.body;
  if (!name || !textArea) {
    throw new Error("Please provide both name and feedback.");
  }
  if (!email || !validator.isEmail(email)) {
    throw new Error("Please provide a valid email address.");
  }

  console.log("Feedback received:", { name, email, textArea });

  try {
    const newFeed = new feedBack({ name, email, textArea });
    await newFeed.save();
    res.status(200).json({ message: "Feedback received successfully." });
  } catch (err) {
    console.error("Error saving feedback:", error);
    res.status(500).json({ message: "Server error. Try again later." });
  }
};

export default handleFeedback;
