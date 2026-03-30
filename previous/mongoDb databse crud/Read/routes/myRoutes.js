const express=require("express")
const {create,read} = require("../controller/myControler")
const myRoute=express.Router()

// create root
myRoute.post("/add",create)
myRoute.get("/find/:name",read)

module.exports=myRoute