import React, { useState } from 'react'
import {db} from '../firebase-config'
import {collection,addDoc} from '@firebase/firestore'

function Employee() {
  const[ename,setname]=useState();
  const[eid,setid]=useState();
  const[eemail,setemail]=useState();
  const[esal,setsal]=useState();
  const employee=collection(db,'curddatabase')

  const handclick=(e)=>{
    e.preventDefault();
    console.log(employee)
    addDoc(employee,{eemail,eid,ename,esal})
  }
    

  return (
    <div>
      <form>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label for="inputEmail">Employee Name</label>
                        <input type="text" className="form-control" id="inputEmail" placeholder="Name" onChange={(e)=>setname(e.target.value)}/>
                    </div>
                    <div className="form-group col-md-3">
                        <label for="inputUserName">Employee Id</label>
                        <input type="text" className="form-control" id="inputUserName" placeholder="Id" onChange={(e)=>setid(e.target.value)}/>
                    </div>
                </div>
                <div className="form-group col-md-3" >
                    <label for="inputPassword">Employee Email</label>
                    <input type="text" className="form-control" id="inputPassword" placeholder="Email" onChange={(e)=>setemail(e.target.value)}/>
                </div>
                
                <div className="form-row ">
                    <div className="form-group col-md-3">
                        <label for="inputCity">Employee Salary</label>
                        <input type="text" className="form-control" id="inputCity" onChange={(e)=>setsal(e.target.value)}/>
                    </div>
                    
                </div>
                <br></br>
                <button  className="btn btn-primary" style={{marginLeft:'-1000px'}} onClick={handclick}>Submit</button>
            </form>
    </div>
  )
}

export default Employee
