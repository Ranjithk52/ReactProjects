import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Student from '../Service/Student'
function ViewAllStudents() {
    const navigate=useNavigate();
    const[student,setstudent]=useState([]);
    useEffect(()=>{

        getAllStudent();

    },[])
    const getAllStudent=async()=>{
       const stddata=await Student.getAllStudents();
       setstudent(stddata.data)
        console.log(stddata.data)
    }
    const deletestudents=(id)=>{
     
        Student.deleteStudent(id);
        getAllStudent();   
    }
    const updatestudent=(id)=>{

        navigate(`/update/${id}`)
    }
    const viewstudent=(id)=>{

        navigate(`/view/${id}`)
    }




  return (
    <div>
      <div className="container">
            <h1>Students List</h1>
            <hr />
            {/* <a className="btn btn-primary" style={{ float: "left" }}>+Employee</a> */}
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Marks</th>
                       
                        <th colSpan={"3"}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {student.map((stdnt) => {
                        return (
                            <tr key={stdnt.Student_id}>
                                <td>{stdnt.Student_id}</td>
                                <td>{stdnt.Student_Name}</td>
                                <td>{stdnt.Student_Marks}</td>
                                
                                <td>
                                    <a className="btn btn-primary" style={{ margin: "10px" }} onClick={()=>updatestudent(stdnt.Student_id)}>Edit</a>
                                    <button className="btn btn-danger" onClick={()=>deletestudents(stdnt.Student_id)}>Delete</button>
                                    <button className="btn btn-success" style={{ margin: "10px" }} onClick={()=>viewstudent(stdnt.Student_id)}>View</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ViewAllStudents
