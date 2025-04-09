import express from "express";
import "dotenv/config.js";
import { connectDB } from "./db/connectDB.js";
import useRoute from "./Routes/useRoute.js";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5174",
    credentials: true,
  })
);


app.use("/", useRoute);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is listening at ${PORT}`);
  });
});

