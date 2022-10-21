// import React from 'react'


// function Employees() {
//     const [id]=useState("1");
//     const [name]=useState("Hello");
    

//   return (
//     <div>
//       <h1>Employee Information</h1><hr/>
//       <p>Employee id:{id}</p>
//       <p>Employee Name:{name}</p>
//     </div>
//   )
// }



// export default Employees
// import React,{useState} from 'react'

// const Employees = () => {
//     const [id,setId]=useState("1");
//     const [name,setName]=useState("Hello");
//   return (
//     <div>
//       <h1>Employee Information</h1><hr/>
//       <p>Employee id:{id}</p>
//       <p>Employee Name:{name}</p>
//     </div>
//   )
// }

// export default Employees


import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

const Employees = props => {
    
  return (
    <div>
      
       <p>Employee id:{props.id}</p>
       <p>Employee Name:{props.name}</p>
       <hr/>
    </div>
  )
}


export default Employees
