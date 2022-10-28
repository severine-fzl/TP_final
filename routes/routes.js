import express from "express";
const router = express.Router();

import HomeController from "../controllers/home.js";
import authMiddleware from "../middlewares/auth.js"
import CreateUserController from "../controllers/subscribe.js"
import LoginController from "../controllers/login.js";
import DashboardController from "../controllers/dashboard.js";

router.get("/", HomeController);
router.get("/login", LoginController);
router.get("/dashboard", authMiddleware, DashboardController);
router.post("/subscribe", CreateUserController)

export default router;
