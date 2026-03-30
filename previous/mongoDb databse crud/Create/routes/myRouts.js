const express=require("express")
const create = require("../controllers/myControlers")
const routerr=express.Router()

routerr.post("/add",create)

module.exports=routerr