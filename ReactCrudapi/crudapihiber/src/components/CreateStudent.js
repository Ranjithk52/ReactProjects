import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Student from '../Service/Student'

function CreateStudent() {
  const navigate=useNavigate();

    const [id,setid,]=useState();
    const[sname,setname]=useState();
    const[Marks,setMarks]=useState();


const creatstud=(e)=>{
  e.preventDefault()
  
Student.createStudent(id,sname,Marks)


}


  return (
    <div>
      <div>
        <form>
        <div className="form-group col-md-3">
          <label htmlFor="exampleInputEmployeeId" className="form-label">Enter Student Id</label>
          <input type="text" className="form-control" id="exampleInputEmployeeId" value={id} onChange={(e) => setid(e.target.value)} />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="exampleInputEmployeeName" className="form-label">Enter Student Name</label>
          <input type="text" className="form-control" id="exampleInputEmployeeName" value={sname} onChange={(e) => setname(e.target.value)} />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="exampleInputEmployeeSalary" className="form-label">Enter Student Marks</label>
          <input type="text" className="form-control" id="exampleInputEmployeeSalary" value={Marks} onChange={(e) => { setMarks(e.target.value) }} />
        </div>
        
        <button type="submit" className="btn btn-primary"  style={{marginRight:'1200px'}} onClick={creatstud}>Create</button>
      </form>
    </div>

    </div>
  )
}

export default CreateStudent
