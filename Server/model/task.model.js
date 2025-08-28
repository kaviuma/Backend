let mongoose = require("mongoose");

let TaskSchema = new mongoose.Schema({

title: {
    type: String
},
completed: {
    type: Boolean
},
createdAt: {
    type: Date
}

});

let T = mongoose.model("Task",TaskSchema)
module.exports = T;
 