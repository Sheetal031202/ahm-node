const express=require("express")
// env
const dotenv=require("dotenv")
dotenv.config()
const PORT=process.env.PORT
// 
const app=express()


app.get("/health",(req,res)=>{
    try{
        res.status(200).json({
            success:true,
            message:"hello"
        })

    }
    catch(e){
  res.status(400).json({
            success:false,
            message:`health path error${}`
        })
    }
})


app.listen(PORT,(e)=>{
    if(e){
        console.log("serving is not running")
    }
    console.log(`surver is running on ${PORT}`)
})