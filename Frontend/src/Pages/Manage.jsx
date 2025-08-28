import React, { useEffect, useState } from "react";
import EmployeeForm from "../Components/empform"
import { Z } from "../store/emp.store";
import { Myform } from "../Components/myform";


const AccordionExample = () => {

let {emp,getemp} = Z();

let [selectedEmp,setSelectedEmp] = useState(null);

useEffect(()=>{
  getemp();
},[]);



  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Employee Management System</h2>

      <div className="accordion" id="myAccordion">
        {/* Item 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Add Employee
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#myAccordion"
          >
            <div className="accordion-body">
              <EmployeeForm/>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
               How do I update employee details?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#myAccordion"
          >
            <div className="accordion-body">
             <div className="table-responsive">
  <table className="table table-striped table-bordered">
    <thead>
    <tr>
       <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Department</th>
      <th scope="col">Salary</th>
      <th scope="col">Action</th>
    </tr>
    </thead>


<tbody>
  {emp.map((d,i) => (
    <tr key={i}>
      <td>{i+1}</td>
      <td>{d.name}</td>
      <td>{d.email}</td>
      <td>{d.department}</td>
      <td>{d.salary}</td>
      <td>
        <button
          className="btn btn-warning btn-sm"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
          onClick={() => setSelectedEmp(d)}
        >
          Update
        </button>
      </td>
    </tr>
  ))}
                      </tbody>
                 </table>
             </div>
           </div>
         </div>
       </div>


{selectedEmp && (
  <div>
  
   {/* Modal */}
      <div
        className="modal fade"
        id="myModal"
        tabIndex="-1"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
               Update
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={()=>setSelectedEmp(null)}
              ></button>
            </div>
            <div className="modal-body">
                  <Myform d={selectedEmp}/>
            </div>
            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
               <button type="button" className="btn btn-success">
                Save Changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
    
  
        {/* Item 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#myAccordion"
          >
            <div className="accordion-body">
              This is the <strong>third accordion item</strong> 🎉.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionExample;