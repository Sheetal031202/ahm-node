const express=require("express")
const { add, read, deletee, edit } = require("../controlers/extraControle")
const myRoute=express.Router()


myRoute.post("/add",add)
myRoute.get("/read/:name",read)
myRoute.delete("/delete/:deleteId",deletee)
myRoute.put("/edit/:editId",edit)

module.exports=myRoute