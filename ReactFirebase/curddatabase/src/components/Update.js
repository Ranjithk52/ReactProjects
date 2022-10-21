import React from 'react'
import { db } from "../firebase-config";
import { collection, getDocs, deleteDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import { useNavigate,useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function Update() {
    const navigate=useNavigate();
    const[ename,setname]=useState();
  const[eid,setid]=useState();
  const[eemail,setemail]=useState();
  const[esal,setsal]=useState();
  const employee=collection(db,'curddatabase')

  const params=useParams();
  
  useEffect(()=>{
    getDoc(params.id).then(res =>{
       setid(res.data.eid);
       setname(res.data.ename);
       setsal(res.data.esal);
       setemail(res.data.eemail);
    });

  },[])
  const update=(e)=>{
    e.preventDefault();
    
    
   updateDoc(ename,{eid,ename,esal,eemail}).then(res =>{
        console.log(res.data)
    })
    navigate(`/view`);

  }
  return (
    <div>
     <form>
        <div className="form-group col-md-3">
          <label htmlFor="exampleInputEmployeeId" className="form-label">Enter Employee Id</label>
          <input type="text" className="form-control" id="exampleInputEmployeeId" value={eid} onChange={(e) => setid(e.target.value)} />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="exampleInputEmployeeName" className="form-label">Enter Employee Name</label>
          <input type="text" className="form-control" id="exampleInputEmployeeName" value={ename} onChange={(e) => setname(e.target.value)} />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="exampleInputEmployeeSalary" className="form-label">Enter Employee Salary</label>
          <input type="text" className="form-control" id="exampleInputEmployeeSalary" value={esal} onChange={(e) => { setsal(e.target.value) }} />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="exampleInputEmployeeAge" className="form-label">Enter Employee Age</label>
          <input type="text" className="form-control" id="exampleInputEmployeeAge" value={eemail} onChange={(e) => { setemail(e.target.value) }} />
        </div><br/>
        <button type="submit" className="btn btn-primary"  style={{marginRight:'1200px'}} onClick={(e)=>update(e)}>Update</button>
        {/* {id}{name}{Salary}{Age} */}
      </form>
    </div>
  )
}

export default Update
