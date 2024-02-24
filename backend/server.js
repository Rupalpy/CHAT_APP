import express from "express";
import dotenv from "dotenv";

const app= express();
dotenv.config();
const PORT=process.env.port || 5000;
app.get("/",(req,res)=>{
    res.send("server is ready");
})
// app.get("/api/auth/signup",(req,res)=>{
//     res.send("sign up route");
// })
// app.get("/api/auth/login",(req,res)=>{
//     res.send("login route");
// })
// app.get("/api/auth/logout",(req,res)=>{
//     res.send("logout route");
// })
app.listen(PORT,()=> console.log(`Server running on port ${PORT}`));