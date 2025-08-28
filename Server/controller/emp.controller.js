 let path = require("path")
let EMP = require(path.join(__dirname, "..", "model", "emp.model.js"));

module.exports = {
    
    addemp: async (req, res) => {
        console.log(req.body);
        
        let { name, email, salary, department } = req.body;
        try {
            let information = await EMP.create({name,email,department,salary})
             console.log(information);
            return res.send("Employee added") 
        }
        catch (error) {
            res.send("Error")
        }
    },

    getemp : async(req,res)=>{

        try{
           let Data = await EMP.find({});
           return res.json({msg :"All employees here",empList : Data});
           }
        catch(e){
           return res.send("ERROR")
        }
    },

    delemp : async (req,res)=>{
    let {name} = req.params;
    console.log(name);
  try {
       await EMP.deleteOne({name:name})
       return res.json({
                        msg : "DELETED"
                       })
      }
  catch(error){
               res.json({
                         msg :"ERROR to delete"
                        })
              }    
    },
    
    updateemp : async (req,res)=>{
  
let {id} = req.params;

let updated = await EMP.findByIdAndUpdate(id,{name:req.body.name,email:req.body.email,salary:req.body.salary,department:req.body.department},{new:true})

console.log(req.body);

res.json({
    msg : "Updated Successfully",
    data: updated
})

    }

}