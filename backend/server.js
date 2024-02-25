import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
const app= express();
dotenv.config();
const PORT=process.env.port || 5000;
app.get("/",(req,res)=>{
    res.send("server is ready");
})
app.use("/api/auth",authRoutes)
app.listen(PORT,()=> {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
});