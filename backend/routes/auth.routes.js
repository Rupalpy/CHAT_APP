import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/signup",signup);
    //what if these functions were very very long

    

router.post("/login",login);

router.post("/logout",logout);

export default router;