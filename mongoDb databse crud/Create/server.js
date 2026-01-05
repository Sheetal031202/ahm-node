const express=require("express")
const app=express()
const PORT=8000
// require dababas
require("./database/db")
// routes
const myRouteer=require("./routes/myRouts")

// post
app.use(express.json())
// use of router
app.use("/",myRouteer)

app.get("/",(req,res)=>{
    res.send("hello to my home page")
})


app.listen(PORT,(e)=>{
    if(e){console.log("server not started....")}
    console.log(`server is running on port ${PORT}`)
})