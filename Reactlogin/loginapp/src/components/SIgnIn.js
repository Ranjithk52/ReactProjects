import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
function SIgnIn() {
    const navigate=useNavigate();

    const[uname,setuname]=useState();
    const[pword,setpword]=useState();
    let login=(e)=>{
        e.preventDefault();
        if(uname==localStorage.getItem('Name') && pword==localStorage.getItem('Pword')){
            navigate('/dashboard');
        }else{
            alert("credentials not matched")
        }
    }
    return (
        <div className='container'>
            <h1>Login Application</h1><hr></hr>
            <form>
                <div className="form-group col-md-3">
                    <label for="exampleInputUserName" class="form-label">User Name</label>
                    <input type="text" className="form-control" id="exampleInputUserName" onChange={(e)=>setuname(e.target.value)}/>

                </div>
                <div className="form-group col-md-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e)=>setpword(e.target.value)}/>
                </div>
                <div className="mb-3 form-check">

                </div>
                <button type="submit" className="btn btn-primary" onClick={login} style={{marginRight:'968px'}}>LogIn</button>
            </form>
        </div>
    )
}

export default SIgnIn
