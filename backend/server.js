import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";

import messageRoutes from "./routes/message.route.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app= express();
const PORT=process.env.PORT || 5000;
dotenv.config();
app.use(express.json()); // to parse the incoming request with JSON payloads from(req.body)
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);

app.get("/",(req,res)=>{
    res.send("server is ready");
})

app.listen(PORT,()=> {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
});