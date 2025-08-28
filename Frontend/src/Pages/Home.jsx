import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";




const Home = ()=>{
  const [emp, setEmp] = useState([]);

   useEffect(() => {
    axios.get("http://localhost:5000/api/emp/getEmp")

   .then((d)=>{
    setEmp(d.data.empList)
    console.log(d.data.empList);
    
   })
   .catch((e)=>{
alert("Error")
   })


  }, []);

function deleteEmp(name){
    axios.delete(`http://localhost:5000/api/emp/del/${name}`)
    .then((d)=>{
alert(d.data.msg)
console.log(d);

    })
    .catch((e)=>{
      alert(e.data)
    })
  }


return(
  <>
  <br /><br />
<div className="table-responsive">
  <table className="table table-striped table-bordered">
    <tr>
       <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Department</th>
      <th scope="col">Salary</th>
      <th scope="col">Action</th>
    </tr>

    {emp.map((d)=>{
      return(
  <tr>
     <th scope="row"></th>
    <td>{d.name}</td>
    <td>{d.email}</td>
    <td>{d.department}</td>
    <td>{d.salary}</td>
    <td><button onClick={()=>{deleteEmp(d.name)}} style={{border:"none"}}>Delete</button> </td>
   
   
  </tr>




      )


    })}
  </table>

  

</div>

</>
)



}










export default Home;

