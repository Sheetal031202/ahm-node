const express = require("express")
const app = express()

const env = require("dotenv")
env.config()

// database
require("./config/db")

const cookieParser=require("cookie-parser")

const PORT = process.env.PORT

// middleware (IMPORTANT)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
// routes
app.use("/api/v1", require("./routes/authRoute"))

app.listen(PORT, (e) => {
    if (e) {
        console.log("server is not running")
    }
    console.log(`server is running on port ${PORT}`)
})