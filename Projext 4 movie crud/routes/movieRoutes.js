const express = require("express");
const routerr = express.Router();

const { create, read, deleteData, edit } = require("../controllers/movieController");

routerr.post("/add", create);
routerr.get("/read/:name",read);
routerr.delete("/delete/:id",deleteData)
routerr.put("/edit/:id",edit)

module.exports = routerr;
