import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeServices from '../services/EmployeeServices';

function EmployeeList() {
    const navigate=useNavigate();
    const [employee,setemployee]=useState([]);
    useEffect(()=>{
        getAllEmployee()
    },[])
    const getAllEmployee=async()=>{
        const empdata=await EmployeeServices.getAllEmployees()
        setemployee(empdata.data) 
    }


   

  return (
    <div className='container'>
      <h1> Employee List</h1><hr/>
      <table className='table table-striped'>
      <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Age</th>
                        <th colSpan={"3"}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employee.map((emply)=>{
                        return(
                            <tr>key={emply.id}
                            <td>{emply.id}</td>
                            <td>{emply.Name}</td>
                            <td>{emply.Salary}</td>
                            <td>{emply.Age}</td>
                            <td>
                                    <a className="btn btn-primary" style={{ margin: "10px" }} onClick={()=>updateemploy(emplye.id)}>Edit</a>
                                    <button className="btn btn-danger" onClick={()=>deleteemployees(emplye.id)}>Delete</button>
                                    <button className="btn btn-success" style={{ margin: "10px" }} onClick={()=>viewemploye(emplye.id)}>View</button>
                                </td>

                            </tr>
                        );
                       

                    })}
                    <td></td>
                </tbody>
      </table>
    </div>
  )
}

export default EmployeeList
