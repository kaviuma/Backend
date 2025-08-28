let path = require("path");
let Task = require(path.join(__dirname,"..","model","task.model.js"))

module.exports = {

  task : async(req,res)=>{
 
    console.log(req.body);
    let {title, description} = req.body;

    try{
    let information = await Task.create({title,description})

    console.log(information);
    return res.send("Task Success")


    }
    catch{
console.log("Error");

    }
    
    
  }

}