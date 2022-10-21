import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate1=useNavigate();
    const[email,setemail]=useState();
    const[cname,setcname]=useState();
    const[cpword,setcpword]=useState();
    const[city,setcity]=useState();
    const[state,setstate]=useState();
    const[zip,setzip]=useState();
    //const[elist,setelist]=useState();
    let handclick=(e)=>{
        e.preventDefault();
        navigate1('/signin');
       
        
        //alert(JSON.stringify(employeee))
    }
     localStorage.setItem('Name',cname);
    localStorage.setItem('Pword',cpword)
    // var employeee={
    //     "Email":email,
    //     "Uname":cname,
    //     "Pass":cpword,
    //     "City":city,
    //     "State":state,
    //     "PinCode":zip

    // } 

    return (
        <div className='container' style={{marginRight:'10px'}}>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label for="inputEmail">Email</label>
                        <input type="text" className="form-control" id="inputEmail" placeholder="Email" onChange={(e)=>setemail(e.target.value)}/>
                    </div>
                    <div className="form-group col-md-3">
                        <label for="inputUserName">UserName</label>
                        <input type="text" className="form-control" id="inputUserName" placeholder="UserName" onChange={(e)=>setcname(e.target.value)}/>
                    </div>
                </div>
                <div className="form-group col-md-3" >
                    <label for="inputPassword">Password</label>
                    <input type="text" className="form-control" id="inputPassword" placeholder="Password" onChange={(e)=>setcpword(e.target.value)}/>
                </div>
                
                <div className="form-row ">
                    <div className="form-group col-md-3">
                        <label for="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity" onChange={(e)=>setcity(e.target.value)}/>
                    </div>
                    <div className="form-group col-md-3">
                        <label for="inputState">State</label>
                        
                        <input type="text" className="form-control" id="inputCity" onChange={(e)=>setstate(e.target.value)}/>
                       
                    </div>
                    <div className="form-group col-md-3">
                        <label for="inputZip">Zip</label>
                        <input type="text" className="form-control" id="inputZip" onChange={(e)=>setzip(e.target.value)}/>
                    </div>
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary" style={{marginLeft:'-1000px'}} onClick={handclick}>Create Account</button>
            </form>
            {/* <table>
                <tr >
                    <th>Email</th>
                    <th>UserName</th>
                    <th>Password</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip Code</th>
                    </tr>

                    <tr>
                    <td>{employeee.Email}</td>
                    <td>{employeee.Uname}</td>
                    <td>{employeee.Pass}</td>
                    <td>{employeee.City}</td>
                    <td>{employeee.State}</td>
                    <td>{employeee.PinCode}</td>
                     
                    
                </tr>
            </table> */}
        </div>
    )
}

export default Register
