const express=require("express");

const app=express();

app.use(logger);

app.get("/student",(req,res)=>{
    return res.send({route: "/student"});
});

app.get("/author",(req,res)=>{
    return res.send({route:"/author"});
})

app.get("/libraries",(req,res)=>{
    return res.send({rote:"/libraries"});
})
