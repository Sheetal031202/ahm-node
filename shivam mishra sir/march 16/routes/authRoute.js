const express=require("express")
const { registerFun, logInFun } = require("../middleware/authControlle")
const route=express.Router()

route.post("/register",registerFun)
route.post("/login",logInFun)


module.exports=route