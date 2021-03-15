const { response } = require("express");
const express=require("express");
const cors=require("cors");

const app=express();

var corsOptions={
    origin: ['http://localhost:4200','http://localhost:4000']

}

app.use(corsOptions)

app.listen(8000,()=>{console.log("Listening")})


app.get("/",(req,res)=>{
    response.send("Hello nodejs")
})


require("./articles.js")(app);