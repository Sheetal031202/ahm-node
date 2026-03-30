const mongoose=require("mongoose")

const mySchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
     age:{
        type:String,
        require:true
    }, city:{
        type:String,
        require:true
    }, password:{
        type:String,
        require:true
    }

})

const myModel=mongoose.model("myyModel",mySchema)
module.exports =myModel