import userSchema from "../model/userModel.js";

const handleAdmin = async (req, res) => {
  const { name, password } = req.body;
  if (name !== "admin" || password !== "admin123") {
    return res.json("invalid Creditentials");
  }
  console.log(req);
  try {
    const feedbacks = await userSchema.find();
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

export default handleAdmin;
