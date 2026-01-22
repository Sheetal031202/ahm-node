const mongoose=require("mongoose")

const extraSchema=mongoose.Schema({
    name:{
        type:String
    },
    std:{
        type:Number
    }
})


const extraModel=mongoose.model("extraaa",extraSchema)

module.exports=extraModel