
const express=require("express")
const app=express()

const env=require("dotenv")
env.config()
// database
require("./config/db")
const PORT=process.env.PORT

app.listen(PORT,(e)=>{
    if(e){
        console.log("server is not running")
    }
    console.log(`server is running on port ${PORT}`)
})