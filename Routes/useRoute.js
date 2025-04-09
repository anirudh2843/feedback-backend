import { Router } from "express";
import FeedBackForm from "../components/FeedBackForm.js";
import handleAdmin from "../components/Admin.js";
const route = Router();

route.post("/feedback", FeedBackForm);
route.post("/admin", handleAdmin);

export default route;
