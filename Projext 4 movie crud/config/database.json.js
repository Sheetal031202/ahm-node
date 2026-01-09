const mongoose = require("mongoose")
const URI = "mongodb://localhost:27017/pr-4_movie"
// 

mongoose
    .connect(URI)
    .then(() => {
        console.log("Database connected");
    })
    .catch((error) => {
        console.error("Database not connected:", error.message);
    });

    module.exports=mongoose