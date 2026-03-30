const express=require("express")
const app=express()
const env=require("dotenv")
const path=require("path")
const cookieParser = require("cookie-parser")

env.config()
const PORT=process.env.PORT
require("./config/db")

app.use(express.json())
app.use(express.urlencoded())
app.use("/uploads",express.static(path.join(__dirname,"uploads")))
app.use(cookieParser())

app.set("view engine","ejs")

app.use("/",require("./routes/myRoutes"))


app.listen(PORT,(e)=>{
    if(e){console.log("server is not started...")}
    console.log(`server is running on PORT ${PORT}`)
})