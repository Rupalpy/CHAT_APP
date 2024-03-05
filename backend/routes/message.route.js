import express from "express";
import {getMessages, sendMessage} from '../controllers/message.controller.js'
import protectRoute from "../middleware/protectRoute.js";

const router= express.Router();
//adding middelewares 
//only those who are logged in ,passed the function protectRoute can go frther
router.get("/:id",protectRoute,getMessages) ;
router.post("/send/:id",protectRoute,sendMessage); 

export default router;
