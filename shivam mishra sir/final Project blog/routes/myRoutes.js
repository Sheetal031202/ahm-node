
const express=require("express")
const { logInPageShow, homePageShow,registerPageShow,addBlogPageShow, addBlogPost, view,deleteFun,editBlogPageShow,editPost } = require("../contoller/myConttoller")
const myUpload = require("../middelware/multer")
const { registerUser, loginUser } = require("../contoller/authController")
const route=express.Router()

route.get("/",logInPageShow)
route.post("/login",loginUser)

route.get("/register",registerPageShow)
route.post("/registerUser",registerUser)

route.get("/home",homePageShow)


route.get("/addBlog",addBlogPageShow)
route.post("/addPost",myUpload.single("image"),addBlogPost)

route.get("/view",view)
route.get("/delete/:id",deleteFun)

route.get("/editBlog/:id",editBlogPageShow)
route.post("/editPost",myUpload.single("image"),editPost)


module.exports=route