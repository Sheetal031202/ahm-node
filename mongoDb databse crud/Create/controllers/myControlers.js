const mongoose=require("mongoose")
const myModel=require("../model/myModel")

// 
const create=async(req,res)=>{
 try{
 let added=await myModel.create(req.body)
 console.log("data not added",added)
    res.status(201).json({added})
 }
 catch(e){
    console.log("data not added",e)
    res.status(500).json({mesaage:e})
 }
}



module.exports =create