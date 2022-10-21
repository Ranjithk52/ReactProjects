import React from 'react'
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Register from './Register'
import SIgnIn from './SIgnIn'

function NavBar() {
  return (
    <div>
      <BrowserRouter>
    <ul>
        <li>
            <Link to='/signin' className='btn btn-primary' style={{margin:'10px'}}>SignIn</Link>
        </li>
        <li>
        <Link to='/register' className='btn btn-primary' style={{margin:'10px'}}>SignUp</Link>
        </li>
    </ul>

      <Routes>
        <Route path='/signin' element={<SIgnIn/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default NavBar
