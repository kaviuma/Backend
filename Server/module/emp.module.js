let express = require("express");
let path = require("path");
let {addemp , getemp ,delemp , updateemp} = require(path.join(__dirname,"..","controller","emp.controller"))



let EmpRouter = express();

EmpRouter.post("/addemp",addemp)
EmpRouter.get("/getemp",getemp)
EmpRouter.delete("/del/:name",delemp)
EmpRouter.put("/update/:id",updateemp)

module.exports = EmpRouter;