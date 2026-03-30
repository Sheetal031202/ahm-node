const model = require("../model/myModel")
const fs = require("fs")
// log in
const logInPageShow = (req, res) => {
    res.render("logInPage")
}

const registerPageShow=(req,res)=>{
res.render("registerPage")
}

const homePageShow=async(req,res)=>{
     try {
        const allData = await model.find()
        if (allData) {
            return res.render("homePage", { allData })
        }

    } catch (error) {
        console.log("data not found in view page")
        return res.render("homePage", { allData })

    }

}

// add blog in
const addBlogPageShow = (req, res) => {
    res.render("addBlog")
}
// blog add post
const addBlogPost = async (req, res) => {
    try {
        if (req.file) {
            req.body.image = req.file.path
            console.log(req.file.path, "added")
        }
        const added = await model.create(req.body)
        if (added) {
            console.log("Data Added Successfully...")
        }
        res.redirect("/addBlog")

    } catch (error) {
        console.log("Data not  Added Successfully...")
        res.redirect("/addBlog")
    }
}


// view
const view = async (req, res) => {
    try {
        const allData = await model.find()
        if (allData) {
            return res.render("viewBlog", { allData })
        }

    } catch (error) {
        console.log("data not found in view page")
        return res.render("viewBlog", { allData })

    }
}

// deleted
const deleteFun = async (req, res) => {
    try {
        const deleted = await model.findByIdAndDelete(req.params.id)
        if (deleted) {
            fs.unlink(deleted.image, () => { })
            console.log("data deleted....")
            res.redirect("/view")
        }

    } catch (error) {
        console.log("data not deleted...")
        res.redirect("/view")
    }
}

// edit page open
const editBlogPageShow = async (req, res) => {
    try {
        const edit = await model.findById(req.params.id)
        if (edit) {
            return res.render("editBlog", { edit })
        }

    } catch (error) {
        console.log("can not open edit page")
        return res, redirect("/view")
    }
}

const editPost = async (req, res) => {
    try {
        // old data
        if (req.file) {
            const oldData = await model.findById(req.body.id)
            fs.unlink(oldData.image,()=>{})
            req.body.image = req.file.path

            const updated = await model.findByIdAndUpdate(req.body.id, req.body, { new: true })
            if (updated) {
                console.log("updated....")
                res.redirect("/view")
            }
        }
        else {
            const updated = await model.findByIdAndUpdate(req.body.id, req.body, { new: true })
            if (updated) {
                console.log("updated....")
                res.redirect("/view")
            }
        }
    } catch (error) {
        console.log("not updated...")
        res.redirect("/edit")
    }
}
module.exports = {
    logInPageShow,homePageShow,registerPageShow,
    addBlogPageShow, addBlogPost,
    view, deleteFun,
    editBlogPageShow, editPost
}