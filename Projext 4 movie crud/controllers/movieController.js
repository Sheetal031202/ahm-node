const movieModel = require("../model/movieModel");

// create
const create = async (req, res) => {

    try {
        const { name, actor, actress, year, lang } = req.body

        if (!name || !actor || !actress || !year || !lang) {
            res.status(400).json({ message: "Data requires" })
        }

        const added = await movieModel.create({ name, actor, actress, year, lang })
        res.status(200).json({ message: "Data added", data: added })
    } catch (e) {
        console.error("Data not added:", e);
        res.status(500).json({
            message: "Internal server error",
            error: e.message
        });
    }

}

// read
const read = async (req, res) => {
    try {
        const { name } = req.params;

        const readData = await movieModel.findOne({ name });

        if (!readData) {
            return res.status(404).json({
                message: "Data not found"
            });
        }

        res.status(200).json({
            message: "Data found",
            data: readData
        });

    } catch (e) {
        console.error("Read error:", e);
        res.status(500).json({
            message: "Server error"
        });
    }
}

// delete
const deleteData = async (req, res) => {
    try {
        const deleteId = req.params.id;
        console.log

        if (!deleteId) {
            return res.status(400).json({ message: "ID is required" })
        }

        const deleted = await movieModel.findByIdAndDelete(deleteId);

        if (!deleted) {
            return res.status(404).json({ message: "Data not found" });
        }

        res.status(200).json({ message: "Data deleted successfully", data: deleted });

    } catch (e) {
        console.error("Delete error:", e);
        res.status(500).json({
            message: "Server error"
        });
    }
};


// edit

const edit = async (req, res) => {
    try {

        const editId = req.params.id

        if (!editId) {
            res.status(404).json({ message: "id required" })
        }

        const editData=await  movieModel.findByIdAndUpdate(editId,req.body,{new:true})
                    res.status(200).json({ message: "Data Edited",data:editData })

    }

    catch (e) {
        console.log("Edit error" .e)
                    res.status(500).json({ message: "server Error" })

    }
}


module.exports = ({ create, read, deleteData, edit })