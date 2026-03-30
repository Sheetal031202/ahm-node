const express=require("express")
const {create,read,deleteData, edit} = require("../controller/myControler")
const myRoute=express.Router()

// create root
myRoute.post("/add",create)
myRoute.get("/find/:name",read)
myRoute.delete("/delete/:id", deleteData);
myRoute.put("/edit/:id",edit)

module.exports=myRoute