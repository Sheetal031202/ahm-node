const mongoose = require("mongoose")

const mySchema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: String
    },

    author: {
        type: String
    },
    image:{
        type:String
    }

})

const myModel=mongoose.model("finalPrRwBlogPrCollection",mySchema)
module.exports=myModel