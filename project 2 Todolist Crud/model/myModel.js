const mongoose=require("mongoose")

const mySchema=mongoose.Schema({
    task:{
        type:String,
        require:true
    }
})

const myModel=mongoose.model("todoList",mySchema)
module.exports =myModel