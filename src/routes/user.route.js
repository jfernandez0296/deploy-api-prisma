import express  from "express";
import { login,generateToken } from "../controllers/user.controller.js";

const router = express.Router();


router.post("/login",login,generateToken);

export default router;