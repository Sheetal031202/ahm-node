const express = require("express")
const myRoute = require("./routes/extraRoutes")
const app = express()
const PORT = 8000
app.set("view engine", "ejs")
// mongoodb connected
require("./Database/db.json")
// roiutes
const routerrr=require("./routes/extraRoutes")
app.use(express.urlencoded())
app.use(express.json());

app.get("/", (req, res) => {
    res.send("welcome to my home")
})

 app.use("/",routerrr)


app.listen(PORT, (er) => {
    if (er) { console.log("server is not connected..") }
    console.log(`server is running on port ${PORT}`)
})