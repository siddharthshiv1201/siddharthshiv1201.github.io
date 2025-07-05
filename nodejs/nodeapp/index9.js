import express from "express";
import bcrypt from "bcrypt";
const app=express();


app.get("/",(req,res)=>{

})
app.listen(8080,()=>{
    console.log("server is running");

})

const pwd="pass1234";

const hashedpwd=await bcrypt.hash(pwd,10);
// console.log(hashedpwd);

const check=await bcrypt.compare("pass1234",hashedpwd);
console.log(check)