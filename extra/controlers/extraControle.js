const model = require("../model/extraModel")

const add = async (req, res) => {

    try {
        let { name, std } = req.body

        let added = await model.create({ name, std })

        if (added) {
            res.status(200).json({ message: "Added", data: { name, std } })
        }
        else {
            res.status(400).json({ message: "can not get data" })
        }

    }
    catch (e) {
        console.log(e)
        res.status(500).json({ message: "internal server error" })
    }

}


const read = async (req, res) => {
    try {
        let{name}=req.params

        let readed=await model.findOne({name})

 if (readed) {
            res.status(200).json({ message: "got name", data: { name } })
        }
        else {
            res.status(400).json({ message: "can not get name" })
        }

    }
    catch (e) {
        console.log("Error", e)
        res.status(500).json({ message: "internal server error" })
    }
}



const deletee = async (req, res) => {
    try {

        let dele=await model.findByIdAndDelete(req.params.deleteId)

 if (dele) {
            res.status(200).json({ message: "ok deleted"})
        }
        else {
            res.status(400).json({ message: "can not get name" })
        }

    }
    catch (e) {
        console.log("Error", e)
        res.status(500).json({ message: "internal server error" })
    }
}





const edit = async (req, res) => {
    try {

        let edited=await model.findByIdAndUpdate(req.params.editId,req.body,{new:"true"})
        console.log(req.params.editId)

 if (edited) {
            res.status(200).json({ message: "updated"})
        }
        else {
            res.status(400).json({ message: "can not get name" })
        }

    }
    catch (e) {
        console.log("Error", e)
        res.status(500).json({ message: "internal server error" })
    }
}


module.exports = { add,read ,deletee,edit}