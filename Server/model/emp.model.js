let mongoose = require("mongoose");

let EmployeeSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    salary: { type: Number },
    department: { type: String }
});

let Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
