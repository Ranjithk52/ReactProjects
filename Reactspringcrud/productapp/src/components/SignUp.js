import React, { useState } from 'react'
import ProductService from '../Services/ProductService'

function SignUp() {
const[name,setname]=useState()
const[mail,setmail]=useState()
const[password,setpassword]=useState()
const[confirmpassword,setconfirm]=useState()

const signup=()=>{
let obj={
    "uname":name,
    "umail":mail,
    "password":password,
    "confirmpassword":confirmpassword
}

    ProductService.createuser(obj)

}


  return (
    <div>
        <form >
  <div class="form-group col-md-3">
    <label for="inputEmail4" class="form-label">User Name</label>
    <input type="text" class="form-control" id="inputEmail4" value={name} onChange={(e) => setname(e.target.value)}/>
  </div>
  <div class="form-group col-md-3">
    <label for="inputPassword4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputPassword4" value={mail} onChange={(e) => setmail(e.target.value)}/>
  </div>
  <div class="form-group col-md-3">
    <label for="inputAddress" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputAddress" value={password} onChange={(e) => setpassword(e.target.value)}/>
  </div>
  <div class="form-group col-md-3">
    <label for="inputAddress2" class="form-label">Confirm Password</label>
    <input type="password" class="form-control" id="inputAddress2" value={confirmpassword} onChange={(e) => setconfirm(e.target.value)}/>
  </div>
  
 
  <div class="form-group col-md-3">
    <button type="submit" class="btn btn-primary" onClick={signup}>Sign Up</button>
  </div>
</form>
      
    </div>
  )
}

export default SignUp
