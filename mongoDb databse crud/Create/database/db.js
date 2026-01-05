const mongoose=require("mongoose")
const URI="mongodb://localhost:27017/ahmDatabase"
try{
mongoose.connect(URI)
.then(()=>console.log("database is connected"))

}
catch(e){
    console.log("server not staeted...",e)
}

module.exports=mongoose