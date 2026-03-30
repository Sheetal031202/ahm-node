const express = require("express")
const app = express()
// require dotenv
require("dotenv").config()



// require db,js
require("./database/db")
// routes require
const routerr=require("./routes/myRoutes")

// middleware for post and route
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("welcome to my second project.. ")
})

// route
app.use("/",routerr)

// port require
const PORT=process.env.PORT
app.listen(PORT, (e) => {
    try {
        console.log(`server is on port ${PORT}`)
    }
    catch (e) {
        console.log("server not added")
    }
})