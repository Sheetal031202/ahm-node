const mongoose=require("mongoose")
const  env=require("dotenv")
env.config()
const MONGO_URL=process.env.MONGO_URL

mongoose.connect(MONGO_URL)
.then(()=>{console.log("database connected...")})
.catch((e)=>{console.log("database not connected...")})

