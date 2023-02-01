import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Student from '../Service/Student';
function ViewStudent() {
const params=useParams();
const [id,setId]=useState();
const [sname,setName]=useState();
const [Marks,setMarks]=useState();

useEffect(()=>{

      Student.getStudent(params.id).then((data)=>{
       console.log("student data by id:"+data.data)
        setId(data.data.Student_id)
        setName(data.data.Student_Name)
        setMarks(data.data.Student_Marks)

      })
},[])
console.log("id"+id)



  return (
    <div>

      
       <h1>Students List</h1>
            <hr />
            {/* <a className="btn btn-primary" style={{ float: "left" }}>+Employee</a> */}
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Student Id</th>
                        <th scope="col">Student Name</th>
                        <th scope="col">Student Marks</th>
                       
                       
                    </tr>
                </thead>
                <tbody>
                   
                            <tr>
                            
                                <td>{id}</td>
                                <td>{sname}</td>
                                <td>{Marks}</td>
                                </tr>
                                </tbody>
                                </table>
    </div>
  )
}

export default ViewStudent
