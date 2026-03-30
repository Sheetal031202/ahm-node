const express = require("express")
const app = express()
const PORT=8000

// require db,js
require("./database/db")
// routes require
const routerr=require("./routes/myRoutes")

// middleware for post and route
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("welcome to home ")
})

// roote
app.use("/",routerr)


app.listen(PORT, (e) => {
    try {
        console.log(`server is on port ${PORT}`)
    }
    catch (e) {
        console.log("server not added")
    }
})