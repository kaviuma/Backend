let express = require("express");
let mongoose = require("mongoose");
let path = require("path")
let EmpRouter = require(path.join(__dirname,"module","emp.module"))
let cors = require("cors");


let app = express();
app.use(cors())
app.use(express.json())


try{
    mongoose.connect("mongodb+srv://kaviuma:kaviuma@cluster0.iavsjhn.mongodb.net/Blog?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Connected to DB");
}

catch(e){
    console.log("Error to connect db");
}

app.use("/api/emp",EmpRouter)



app.listen(5000,()=>{
    console.log(`http://localhost:5000`);
    
})