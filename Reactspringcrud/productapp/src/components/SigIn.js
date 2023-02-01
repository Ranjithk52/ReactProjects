import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductService from '../Services/ProductService'

function SigIn() {
    const[name,setname]=useState()
    const[pass,setpass]=useState()
    const[msg,setmsg]=useState()
    const navigate=useNavigate()
    const signin=(e)=>{
        e.preventDefault()
        ProductService.siginuser(name,pass).then((res)=>{
            setmsg(res.data)
            if(msg=="Successfully Signed In....."){
                navigate("/dashboard")
            }else{
                <h1>{msg}</h1>
            }
        })
        
    }


  return (
   
      <div>
        <form >
  <div class="form-group col-md-3">
    <h1>{msg}</h1>
    <label for="inputEmail4" class="form-label">User Name</label>
    <input type="text" class="form-control" id="inputEmail4" value={name} onChange={(e) => setname(e.target.value)}/>
  </div>
  <div class="form-group col-md-3">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="text" class="form-control" id="inputPassword4" value={pass} onChange={(e) => setpass(e.target.value)}/>
  </div>
  <div class="form-group col-md-3">
    <button type="submit" class="btn btn-primary" onClick={signin}>Sign In</button>
  </div>
  
</form>
      
    </div>
    
  )
}

export default SigIn
