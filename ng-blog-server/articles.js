const { response } = require("express");
const ARTICLES=require("./mock-articles")

module.exports = function(app){
    app.get("/articles",(req,res)=>{
        res.send(ARTICLES);
    })

    app.get("/article/:key",(req,res)=>{
        response.send(ARTICLES.filter(article=>article.key==req.params.key))[0];
        
    })
};