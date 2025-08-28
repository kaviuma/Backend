let express = require("express");
let mongoose = require("mongoose");
let path = require("path");
const TaskRouter = require(path.join(__dirname,"module","task.module"));
let cors = require("cors");


 let app = express();
 app.use(cors())
 app.use(express.json());


 try {
  mongoose.connect("mongodb+srv://kaviuma:kaviuma@cluster0.iavsjhn.mongodb.net/Blog?retryWrites=true&w=majority&appName=Cluster0")

  console.log("CONNECTED TO DATABASE");
  
 } 
 catch (error) {
  console.log("ERROR TO CONNECT DATABASE");
  
 }

app.use("/api/tsk",TaskRouter)
 
app.listen(5000,()=>{
  console.log(`http://localhost:5000`);
  
})
