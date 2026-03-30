const express=require("express")
const { register } = require("../controller/authController/authContoller")
const route=express.Router()

// to use this route /api/v1/register
route.post("/register",register)


module.exports=route