const mongoose=require("mongoose")

const mySchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    }
})

const myModel=mongoose.model("ahmNodeCollection",mySchema)

module.exports=myModel