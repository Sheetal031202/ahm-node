const express = require("express")
const app = express()
// databas connected
require("./config/db.json")
// import multer
const multer = require("multer")
// 1  cludinary
const cloudinary = require("cloudinary").v2;


app.use(express.urlencoded())
app.set("view engine", "ejs")

// disk
const myStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        return cb(null, "./uploads")
    },
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
})

// 2
cloudinary.config({
    cloud_name: 'dtt3jm4fl',
    api_key: '673463837657466',
    api_secret: 'PPDVWO8mNCItToHe2do_tMzqnNw'
});

// opload
const upload = multer({ storage: myStorage })

app.get("/", (req, res) => {
    // niche thi je url aavyo te,but atyrae null rakhvanu
    res.render("home",{url:null} )
})

// post
app.post("/upload", upload.single("image"), async (req, res) => {
    console.log(req.file)

    // 3
    const file = req.file.path
        console.log("file ", file)

    const fileUpload = await cloudinary.uploader.upload(file, {
        folder: "nodejs"
    })
    console.log("cloud response", fileUpload)
    console.log("cloud response")
    // 3


    // 4
    res.render("home",{url:fileUpload.secure_url} )
})

app.listen(8080, () => {
    console.log("server started.........")
})