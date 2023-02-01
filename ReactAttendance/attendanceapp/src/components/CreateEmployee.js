import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function CreateEmployee() {
    //const navigate1=useNavigate();
    const[fname,setfname]=useState();
    const[lname,setlname]=useState();
    const[email,setemail]=useState();
    const[password,setpassword]=useState();
    const[confirmpassword,setconfirmpassword]=useState();
    const[address,setaddress]=useState();
    const[emplye,setemplye]=useState();
    const[msg,setmsg]=useState();
    // const [passwordType, setPasswordType] = useState("password");
    // const [passwordInput, setPasswordInput] = useState("");
    let obj={
            
        "empFirstName":fname,
        "empLastName":lname,
        "empEmail":email,
        "empPassword":password,
        "empConfirmPassword":password,
        "empAddress":address
        
    
}
    const handclick=(e)=>{
        e.preventDefault();
        
        

        axios.post("http://localhost:9952/attendance/employee/register",obj).then((res)=>{
        setmsg(res.data);
        })
console.log(obj);


    }
   
        
        
        // const handlePasswordChange =(evnt)=>{
        //     evnt.preventDefault();
        //     setPasswordInput(evnt.target.value);
        // }
        // const togglePassword =(e)=>{
        //     e.preventDefault()
        //   if(passwordType==="password")
        //   {
        //    setPasswordType("text")
        //    return;
        //   }
        //   setPasswordType("password")
        // }

   
  return (
    <div className='container' style={{marginRight:'10px'}}>
    <form>
        <h1>{msg}</h1>
        <div className="form-row">
            <div className="form-group col-md-3">
                <label for="inputEmail">Enter First Name</label>
                <input type="text" className="form-control" id="inputEmail" placeholder="First Name" value={fname} onChange={(e)=>setfname(e.target.value)}/>
            </div>
            <div className="form-group col-md-3">
                <label for="inputUserName">Enter LastName</label>
                <input type="text" className="form-control" id="inputUserName" placeholder="Last Name" value={lname} onChange={(e)=>setlname(e.target.value)}/>
            </div>
        </div>
        <div className="form-group col-md-3" >
            <label for="inputPassword">Enter Email</label>
            <input type="email" className="form-control" id="inputPassword" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)}/>
        </div>
        
        <div className="form-row ">
        {/* <div className="form-group col-md-3">
                    <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" class="form-control" placeholder="Password" />
                    <div className="input-group-btn">
                     <button className="btn btn-outline-primary" onClick={togglePassword}>
                     { passwordType==="password"? <i className="bi bi-eye-slash"></i> :<i className="bi bi-eye"></i> }
                     </button>
                    </div>
                </div>
                <div className="form-group col-md-3">
                    <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" class="form-control" placeholder="Confirm Password" />
                    <div className="input-group-btn">
                     <button className="btn btn-outline-primary" onClick={togglePassword}>
                     { passwordType==="password"? <i className="bi bi-eye-slash"></i> :<i className="bi bi-eye"></i> }
                     </button>
                    </div>
                </div> */}
            <div className="form-group col-md-3">
                <label for="inputCity">Enter Password</label>
                <input type="password" className="form-control"  value={password} onChange={(e)=>setpassword(e.target.value)}/>
                
            </div>
            <div className="form-group col-md-3">
                <label for="inputState">Enter Confirm Password</label>
                
                <input type="password" className="form-control"  value={confirmpassword} onChange={(e)=>setconfirmpassword(e.target.value)}/>
                
            </div>
            <div className="form-group col-md-3">
                <label for="inputZip">Enter Address</label>
                <input type="text" className="form-control" id="inputZip" value={address} onChange={(e)=>setaddress(e.target.value)}/>
            </div>
        </div>
        <br></br>
        <button type="submit" className="btn btn-primary" style={{marginLeft:'-1000px'}} onClick={handclick}>Register</button>
    </form>
      
    </div>
  )
}

export default CreateEmployee

