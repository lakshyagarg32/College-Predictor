const express=require("express");
const bodyParser=require("body-parser");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.post("/api/test",(req,res)=>{
    console.log(req.body);
    res.send("hello world");
});

app.get("/",(req,res)=>{
    res.send("hello world");
})

app.listen(5000,()=>{
    console.log("Server started on port 5000");
});