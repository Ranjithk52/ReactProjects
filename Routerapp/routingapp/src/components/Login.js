import React, { useState } from 'react'
import { Link} from 'react-router-dom';

function Login() {
  // const Navigate=useNavigate();
  const [cuname,setcuname]=useState();
  const[cpword,setcpword]=useState();    
 
    // const [uname,setuname]=useState();
    // const [pword,setpword]=useState();
    // const handclick = (e) =>{
    //     e.preventDefault();
    //     if(uname===cuname && pword===cpword){
    //     Navigate("/service")
    //     }else{
    //         alert("credentials not  matched")
    //     }
    // }
    localStorage.setItem('Pass',cpword);
    localStorage.setItem('UseName',cuname);

   
    
    

    
    

  return (
    <div>
       <label>Create User Name</label>
     <input type="text" name="cuname" value={cuname} onChange={(e=>setcuname(e.target.value))}/><br></br><br></br>
     <label >Create Password</label>
     <input type="text" name="pword" value={cpword} onChange={(e=>setcpword(e.target.value))}/><br></br><br></br>
 
    
    <button> <Link to='/credentials'>Next</Link></button><br></br><br></br>
    {/* <label>User Name</label>
     <input type="text" name="Uname" value={uname} onChange={(e=>setuname(e.target.value))}/><br></br><br></br>
     <label >Password</label>
     <input type="text" name="pword" value={pword} onChange={(e=>setpword(e.target.value))}/><br></br><br></br>

     <button className='btn btn-primary' onClick={handclick} >login</button>
     <Link to='/change'>ChangePassword</Link>   */}
    
     
    </div>
  )
  
}

export default Login
