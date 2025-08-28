let express = require("express");
let path = require("path");
const { task } = require(path.join(__dirname,"..","controller","task.controller"));


let TaskRouter = express();

TaskRouter.post("/tasks",task)

module.exports = TaskRouter;