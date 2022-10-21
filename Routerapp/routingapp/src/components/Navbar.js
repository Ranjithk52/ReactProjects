import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from '../App';
import About from './About'
import Change from './Change';
import Contact from './Contact'
import Credentials from './Credentials';
import Home from './Home'
import Login from './Login';
import Service from './Service'

const Navbar = () => {
  return (
    <div >
        <BrowserRouter>
    <ul type="none" class="navbar navbar-dark bg-dark">
    <li>
        <Link to='/home'>Home</Link>
       


    </li>
    <li>
        <Link to='/service'>Service</Link>
    </li>
    <li>
        <Link to='/about'>About</Link>
    </li>
    <li>
        <Link to='/contact'>Contact</Link>
    </li>

    </ul>


     
      
      <Routes>
        <Route exactpath='/' element={<App/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/change' element={<Change/>}/>
        <Route path='/credentials' element={<Credentials/>}/>
      </Routes>
      </BrowserRouter>
      </div>
      
  
    
  )
}

export default Navbar
