import React, { useState } from 'react'
import { Z } from '../store/emp.store'




export const Myform = ({d}) => {
   let {update} = Z();

let [name,setName] = useState(d?.name|| "");
let [email,setEmail] = useState(d?.email||"");
let [salary,setSalary] = useState(d?.salary||"");
let [department,setDepartment] = useState(d?.department||"");



 let hs = (e)=>{
e.preventDefault();

let updatedData = {name,email,salary,department};

update(d._id,updatedData);
 }

  return (
    
      <form onSubmit={hs}>

<input type="text"  placeholder='Name' value={name} onChange={(e)=> setName(e.target.value)}/><br />
<input type="text" placeholder='Email'  value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
<input type="text" placeholder='Salary'  value={salary} onChange={(e)=>setSalary(e.target.value)}/><br />
<input type="text" placeholder='Department' value={department} onChange={(e)=>setDepartment(e.target.value)} />


 <button type='submit'>Update</button> 

 
      </form>
  
  )
}





