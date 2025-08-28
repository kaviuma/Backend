import React, { useState } from "react";
import axios from "axios"

function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    salary:"",
    department: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Employee Added Successfully!");

  try{
         let res = await axios.post("http://localhost:5000/api/emp/addemp",formData);
         console.log(res);
         
       alert(res.data )
      
    }
    catch{ 
       alert("Error to add the employee")
     }


  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Salary</label>
        <input
          type="salary"
          name="salary"
          className="form-control"
          value={formData.salary}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Department</label>
        <input
          type="text"
          name="department"
          className="form-control"
          value={formData.department}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add Employee
      </button>
    </form>
  );
}

export default EmployeeForm;
