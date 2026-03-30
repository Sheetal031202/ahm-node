const express=require("express")
const app=express()
// env confid
require("dotenv").config()

app.get("/",(req,res)=>{
    res.send("welcom to env")
})


const envPort=process.env.PORT
app.listen(envPort,()=>{
    console.log("server started")
})