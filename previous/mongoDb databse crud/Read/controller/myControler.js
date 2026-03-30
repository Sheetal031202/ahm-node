const myModel = require("../model/myModel")

// create data
const create = async (req, res) => {
    try {
        let added = await myModel.create(req.body)
                console.log("data adeed", added)
                res.status(200).json({added})
        
    }
    catch (e) {
     console.log("data not added",e)
    res.status(500).json({mesaage:e})
    }
}

// read data
const read=async(req,res)=>{
    let {name}=req.params

try{
    let readData=await myModel.findOne({name})
    console.log("data adeed", readData)
                res.status(200).json({readData})
}
 catch(e){
    console.log("data  not reded",e)
    res.status(500).json({mesaage:e})
 }
}

module.exports={create,read}