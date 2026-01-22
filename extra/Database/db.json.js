const mongoose=require("mongoose")
const URL="mongodb://localhost:27017/extra"
mongoose.connect(URL)
.then(()=>console.log("database connected "))
.catch((e)=>{
    console.log("databas not conected..",e)
})


module.exports=mongoose