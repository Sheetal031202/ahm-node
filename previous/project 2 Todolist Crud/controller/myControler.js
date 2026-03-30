const myModel = require("../model/myModel")

// create data
const create = async (req, res) => {
    try {
        let added = await myModel.create(req.body)
        console.log("data added", added)
        res.status(200).json({ added })

    }
    catch (e) {
        console.log("data not added", e)
        res.status(500).json({ mesaage: e })
    }
}

// read data
const read = async (req, res) => {
    let { task } = req.params

    try {
        let readData = await myModel.findOne({ task })
        console.log("data added", readData)
        res.status(200).json({ readData })
    }
    catch (e) {
        console.log("data  not read", e)
        res.status(500).json({ mesaage: e })
    }
}

// delete
const deleteData = async (req, res) => {
    try {
        const deleted = await myModel.findByIdAndDelete(req.params.id);

        if (!deleted) {
            return res.status(404).json({ message: "Data not found" });
        }

        res.status(200).json({
            message: "Data deleted successfully"
        });
    } catch (error) {
        console.error("Delete error:", error);
        res.status(500).json({ message: error.message });
    }
};
// edit
const edit = async (req, res) => {
    try {
        const edited = await myModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!edited) {
            return res.status(404).json({ message: "Data not found" });
        }

        res.status(200).json({
            message: "Data updated successfully"        });
    } catch (error) {
        console.error("Update error:", error);
        res.status(500).json({ message: error.message });
    }
};

module.exports = { create, read,deleteData,edit}