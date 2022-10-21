import React from 'react'
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate=useNavigate();

    const oneclick=()=>{
        navigate('/create')
    }
    const viewclick=()=>{
        navigate('/view')
    }

  return (
    <div>
      <ul>
  <li><a className="btn btn-primary"  onClick={oneclick}>Create</a></li>
  <li><a className="btn btn-primary" onClick={viewclick}>View</a></li>
  
</ul>
    </div>
  )
}

export default Navbar
