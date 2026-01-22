
const express = require("express")
const app = express()
const multer = require("multer")

app.set("view engine", "ejs")
app.use(express.urlencoded())

// 1
const myy=multer.diskStorage({
    destination: (req, file, cb) => {
        return cb(null, "./uploads")
    },
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
})

// 2
const uploadd=multer({storage:myy})

app.get("/", (req, res) => {

    res.render("home", {
        name: "raj"
    })
})

// 3
app.post("/upload",uploadd.single("image"),(req,res)=>{
res.redirect("/")
})

app.listen(8080, () => {
    console.log("started...........")
})