import React from 'react'
import {useNavigate} from 'react-router-dom'
function NavBar() {
  const navigate=useNavigate();

const createstudent=()=>{

navigate(`/create`)

}
const liststudent=()=>{
navigate(`/list`)

}

console.log("hello")
  return (
    <div>
      
       <nav className="navbar bg-light">
  <form className="container-fluid justify-content-start">
    <button className="btn btn-outline-success me-2" type="button" onClick={createstudent}>Create Student</button>
    <button className="btn btn-sm btn-outline-secondary" type="button" onClick={liststudent}>List Students</button>
  </form>
</nav>
    </div>
  )
}

export default NavBar
