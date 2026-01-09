const express=require("express")

const app=express()
const PORT=8000
// databas
require("./config/database.json")
// router
const myRoutes=require("./routes/movieRoutes")



// middelw ware 
// post
app.use(express.json())

// routes
app.use("/",myRoutes)

app.get("/",(req,res)=>{
    res.send("hello to my project 4")
})

app.listen(PORT,()=>{
    console.log("server is running")
})