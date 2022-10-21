import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


function Credentials() {
  // const Navigate=useNavigate
  // const [uname,setuname]=useState
  //   const [pword,setpword]=useState();
  //   const handclick = (e) =>{
  //       e.preventDefault();
  //       var obj1=localStorage.getItem('UseName');
  //       var obj2=localStorage.getItem('Pass')
        
  //       if(uname===obj1 && pword===obj2){
  //       Navigate("/service")
  //       }else{
  //           alert("credentials not  matched")
  //       }
  //   }
  const [uname,setuname]=useState();
  const [pword,setpword]=useState();
  return (
    <div>
      <label>User Name</label>
     <input type="text" name="Uname" value={uname} onChange={(e=>setuname(e.target.value))}/><br></br><br></br>
     <label >Password</label>
     <input type="text" name="pword" value={pword} onChange={(e=>setpword(e.target.value))}/><br></br><br></br>

     <button className='btn btn-primary' >login</button>
     <Link to='/change'>ChangePassword</Link>  
    </div>
  )
}

export default Credentials
