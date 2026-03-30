const mongoose=require("mongoose")
const URI="mongodb://localhost:27017/Project2"

try{
    mongoose.connect(URI)
    .then(()=>{
        console.log("databas is connected")
    })
}
catch(e){
    console.log("database is not connected....",e)
}

module.exports=mongoose