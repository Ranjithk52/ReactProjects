import React, { useState } from 'react'

function InriDcri() {
    let[no,setno]=useState(0);
  return (
    <div>
      <p>{no}</p>
      <button className='btn btn-success' onClick={()=>setno(no+1)}>Increment</button>
      <button className='btn btn-danger' onClick={()=>setno(no<=0?no=0:no-1)}>Decrement</button>
    </div>
  )
}

export default InriDcri
