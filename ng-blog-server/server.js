const { response } = require("express");
const express=require("express");

const app=express();

app.listen(8000,()=>{console.log("Listening")})


app.get("/",(req,res)=>{
    response.send("Hello nodejs")
})