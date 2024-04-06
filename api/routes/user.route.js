import express from "express";
import { test } from "../controllers/user.controller.js";

//test route
const router = express.Router();

router.get("/test", test);

export default router;
