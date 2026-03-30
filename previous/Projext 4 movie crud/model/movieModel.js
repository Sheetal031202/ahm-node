const mongoose=require("mongoose")

const movieSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    actor:{
        type:String,
        require:true
    },
     actress:{
        type:String,
        require:true
    },
     year:{
        type:String,
        require:true
    },
     lang:{
        type:String,
        require:true
    }
})


const movieModel = mongoose.model("movieCollection", movieSchema);

module.exports=movieModel