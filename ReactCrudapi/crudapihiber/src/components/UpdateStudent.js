import React from 'react'
import { useState,useEffect} from 'react'
import Student from '../Service/Student'
import {useParams,useNavigate} from 'react-router-dom'
function UpdateStudent() {
    const [id,setid]=useState();
    const[sname,setname]=useState();
    const[Marks,setMarks]=useState();
    const params=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        Student.getStudent(params.id).then((res) =>{
           setid(res.data.Student_id);
           setname(res.data.Student_Name);
           setMarks(res.data.Student_Marks);
           
        });
    

        console.log("paramsid:"+params.id);
      },[])
      const update=(e)=>{
        e.preventDefault();
        // let obj={
        //     "id":parseInt(id),
        //     "name":sname,
        //     "Marks":parseInt(Marks)
            
        // }
        
        
        Student.updateStudent(id,sname,Marks).then(res =>{
            
        })
        navigate(`/list`);
    
      }
      return (
        <div>
         <form>
            <div className="form-group col-md-3">
              <label htmlFor="exampleInputEmployeeId" className="form-label">Enter Employee Id</label>
              <input type="text" className="form-control" id="exampleInputEmployeeId" value={id}  />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="exampleInputEmployeeName" className="form-label">Enter Employee Name</label>
              <input type="text" className="form-control" id="exampleInputEmployeeName" value={sname} onChange={(e) => setname(e.target.value)} />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="exampleInputEmployeeSalary" className="form-label">Enter Employee Marks</label>
              <input type="text" className="form-control" id="exampleInputEmployeeSalary" value={Marks} onChange={(e) => { setMarks(e.target.value) }} />
            </div>
            <br/>
            <button type="submit" className="btn btn-primary"  style={{marginRight:'1200px'}} onClick={(e)=>update(e)}>Update</button>
            {id}{sname}{Marks}
          </form>
        </div>
      )
}

export default UpdateStudent
